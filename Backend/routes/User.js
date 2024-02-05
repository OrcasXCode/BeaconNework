const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { userCreate } = require("../type");
const otpgenerator = require("otp-generator");
const { OTP } = require("../db/OTP.JS");
const mailSender = require("../utils/mailSender");
const { sendOTP } = require("../mail/templates/sendOTP");
const { User } = require("../db/User");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
const { userMiddleware } = require("../middlewares/User");
require("dotenv").config();

router.post("/signup", async (req, res) => {
  const createUser = req.body;
  const userPayload = userCreate.safeParse(createUser);
  if (!userPayload.success) {
    res.status(411).json({
      msg: "Wrong Inputs",
    });
    return;
  }
  await User.create({
    name: createUser.name,
    email: createUser.email,
    password: createUser.password,
  });
  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      email,
      password,
    });
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    } else {
      const token = jwt.sign(
        { _id: user._id.toString(), email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      localStorage.setItem("jsonwebtoken", token);
      return res.status(200).json({
        success: true,
        token,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "User dosen't exists",
    });
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const email = req.body.email;
    const otp = req.body.otp;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        msg: "Email and OTP are required fields!",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User not found with the provided email",
      });
    }

    const latestOtp = await OTP.findOne({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!latestOtp) {
      return res.status(403).json({
        success: false,
        msg: "No OTP found for the provided email",
      });
    }

    const otpExpirationTime = 3 * 60 * 1000; // 3 minutes in milliseconds
    if (Date.now() - latestOtp.createdAt > otpExpirationTime) {
      return res.status(403).json({
        success: false,
        msg: "OTP has expired",
      });
    }

    if (otp !== latestOtp.otp) {
      return res.status(403).json({
        success: false,
        msg: "Invalid OTP",
      });
    }

    const token = jwt.sign(
      { _id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    localStorage.setItem("changepassword", token);
    return res.cookie("token", token, options).status(200).json({
      success: true,
      msg: "OTP and email verified successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
});

router.use("/change-password", userMiddleware);
router.post("/change-password", async (req, res) => {
  try {
    const userDetails = await User.findById(req.user._id);
    const NewPassword = req.body.NewPassword;
    const ConfirmNewPassword = req.body.ConfirmNewPassword;

    if (NewPassword !== ConfirmNewPassword) {
      return res.status(401).json({
        success: false,
        msg: "Passwords does not match please try again",
      });
    }

    const updatedNewPassword = await User.findByIdAndUpdate(
      {
        _id: userDetails._id.toString(),
      },
      {
        password: NewPassword,
      },
      {
        new: true,
      }
    );

    try {
      const emailResponse = await mailSender(
        updatedNewPassword.email,
        "Password for your account has been updated",
        passwordUpdated(
          updatedNewPassword.email,
          `Password updated successfully for ${updatedNewPassword.firstName} ${updatedNewPassword.lastName}`
        )
      );
      console.log("Email sent successfully:", emailResponse.response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        msg: "Error occured while sending the email",
      });
    }
    return res.status(200).json({
      success: true,
      msg: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Failed to change the password",
    });
  }
});
router.post("/send-otp", async (req, res) => {
  try {
    const email = req.body.email;
    let otp;

    let existingOtp;
    do {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        numbersOnly: true,
      });

      existingOtp = await OTP.findOne({ otp });
    } while (existingOtp);

    const otpPayload = { email, otp };

    // Use create to insert a new OTP
    const otpBody = await OTP.create(otpPayload);

    // Use the generated OTP in the email
    const sendOTPEmail = await mailSender(
      email,
      "OTP sent successfully",
      sendOTP(email, otp)
    );

    res.status(200).json({
      success: true,
      msg: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.log("Error in sending OTP : ", error);
    return res.status(500).json({
      success: false,
      message: "Server Error! Failed to send OTP.",
    });
  }
});

module.exports = router;
