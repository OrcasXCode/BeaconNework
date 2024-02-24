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
const { BeacomeASeller } = require("../db/becomeaseller");
const { RegisterForInterview } = require("../db/registerforinterview");
const { GetAPartTimeJob } = require("../db/getpartimejob");
const { registerEmail } = require("../db/registeremail");
const bcrypt = require("bcryptjs");
// const { SingleTeam } = require("../db/singleteam");
// const { Team } = require("../db/team");
require("dotenv").config();

router.post("/registeremail", async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(401).json({
        success: false,
        msg: "Please provide email to register your email",
      });
    }
    let otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    let result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    // Check if the generated OTP already exists, regenerate if it does
    while (result) {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };

    // Use create to insert a new OTP
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
    // Use the generated OTP in the email
    const sendOTPEmail = await mailSender(
      email,
      "OTP sent successfully",
      sendOTP(email, otp)
    );
    res.status(200).json({
      success: true,
      msg: "OTP sent successfully",
      email,
      otp,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});

router.post("/verifyemail", async (req, res) => {
  try {
    const email = req.query.email || req.body.email;
    const { otp } = req.body;

    if (!otp) {
      return res.status(400).json({
        success: false,
        msg: "Please provide an OTP to verify your email",
      });
    }

    const latestOtp = await OTP.findOne({ email }).sort({ createdAt: -1 });

    if (!latestOtp) {
      return res.status(404).json({
        success: false,
        msg: "No OTP found for the provided email",
      });
    }

    const otpExpirationTime = 3 * 60 * 1000; // 3 minutes in milliseconds
    const otpCreatedAt = new Date(latestOtp.createdAt).getTime();
    const currentTime = Date.now();

    if (currentTime - otpCreatedAt > otpExpirationTime) {
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

    // Assuming `registerEmail.create({ email })` is a valid operation to register the email
    await registerEmail.create({ email });

    return res.status(200).json({
      success: true,
      msg: "Your email is registered successfully",
    });
  } catch (error) {
    console.error("Error in verifying email:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error!",
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const createUser = req.body;
    const { name, email, password } = createUser;

    // Check if email is registered
    const findEmail = await registerEmail.findOne({ email });
    if (!findEmail) {
      return res.status(400).json({
        success: false,
        msg: "You need to register the email first",
      });
    }

    // Validate user data
    const userPayload = userCreate.safeParse(createUser);
    if (!userPayload.success) {
      return res.status(422).json({
        success: false,
        msg: "Invalid user data",
        errors: userPayload.error.message,
      });
    }

    // Create a new user
    await User.create({ name, email, password });

    return res.status(201).json({
      success: true,
      msg: "User created successfully",
    });
  } catch (error) {
    console.error("Error in user creation:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
});
// Import bcrypt for password hashing

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // If user is not found, return error
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "User not found",
      });
    }

    // Compare the provided password with the hashed password in the database
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   return res.status(400).json({
    //     success: false,
    //     msg: "Invalid email or password",
    //   });
    // }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Return token in response body
    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Error in signin:", error);
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

router.post("/send-otp", async (req, res) => {
  try {
    const email = req.body.email;

    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      return res.status(401).json({
        success: false,
        msg: "No user found with this email. You need to register first.",
      });
    }

    let otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);

    // Check if the generated OTP already exists, regenerate if it does
    while (result) {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };

    // Use create to insert a new OTP
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);

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

router.post("/change-password", userMiddleware, async (req, res) => {
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

router.post("/becomeaseller", async (req, res) => {
  const email = req.body.email;

  try {
    if (!email) {
      return res.status(404).json({
        success: false,
        msg: "email is required",
      });
    }
    await BeacomeASeller.create({
      email: email,
    });
    return res.status(200).json({
      success: true,
      msg: "Registrered as a seller successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Failed to register as a seller",
    });
  }
});

router.post("/registerforinterview", async (req, res) => {
  const email = req.body.email;

  try {
    if (!email) {
      return res.status(404).json({
        success: false,
        msg: "email is required",
      });
    }
    await RegisterForInterview.create({
      email: email,
    });
    return res.status(200).json({
      success: true,
      msg: "Registrered for interview successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Failed to register for interview",
    });
  }
});

router.post("/getpartimejob", async (req, res) => {
  const email = req.body.email;

  try {
    if (!email) {
      return res.status(404).json({
        success: false,
        msg: "email is required",
      });
    }
    await GetAPartTimeJob.create({
      email: email,
    });
    return res.status(200).json({
      success: true,
      msg: "Registrered for part time job successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Failed to register for part time job",
    });
  }
});

module.exports = router;
