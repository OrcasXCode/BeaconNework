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
const otpGenerator = require("otp-generator");

router.post("/registeremail", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        msg: "Please provide an email to register",
      });
    }

    const otp = otpGenerator.generate(6, {
      digits: true,
      alphabets: false,
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    if (!otpBody) {
      return res.status(500).json({
        success: false,
        msg: "Failed to generate OTP",
      });
    }

    const sendOTPEmail = await mailSender(
      email,
      `Your OTP is : ${otp}`,
      sendOTP(email, otp)
    );
    return res.status(200).json({
      success: true,
      msg: "OTP sent successfully",
      otp,
      email,
    });
  } catch (error) {
    console.error("Error in registering email:", error);
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

    // Register the email after OTP verification
    await registerEmail.create({ email });

    return res.status(200).json({
      success: true,
      msg: "Your email is registered successfully",
    });
  } catch (error) {
    console.error("Error in verifying email:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
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

    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        msg: "Invalid Password",
      });
    }

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

    // Check if the email exists in the database
    const findEmail = await User.findOne({ email });
    if (!findEmail) {
      return res.status(404).json({
        success: false,
        msg: "User not found with this email. Please register first.",
      });
    }

    // Generate a unique OTP
    let otp;
    let otpExists = true;
    while (otpExists) {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      otpExists = await OTP.exists({ otp });
    }

    // Save the OTP in the database
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);

    // Send OTP email (implement your mailSender function)
    const sendOTPEmail = await mailSender(
      email,
      `Your OTP is : ${otp}`,
      sendOTP(email, otp)
    );

    // Respond to the client
    res.status(200).json({
      success: true,
      msg: "OTP sent successfully. Check your email.",
    });
  } catch (error) {
    console.error("Error in sending OTP:", error);
    res.status(500).json({
      success: false,
      msg: "Failed to send OTP. Please try again later.",
    });
  }
});
router.post("/forgot-password", async (req, res) => {
  try {
    let email = req.query.email; // Get email from query parameters
    const otp = req.body.otp;

    if (!email) {
      return res.status(400).json({
        success: false,
        msg: "Email is required!",
      });
    }

    if (!otp) {
      return res.status(400).json({
        success: false,
        msg: "OTP is required!",
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

    // Send the token in the response payload
    return res.status(200).json({
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
    const { NewPassword, ConfirmNewPassword } = req.body;

    // Check if the new password matches the confirmation
    if (NewPassword !== ConfirmNewPassword) {
      return res.status(400).json({
        success: false,
        msg: "Passwords do not match. Please try again.",
      });
    }

    // Update the user's password
    const updatedUser = await User.findByIdAndUpdate(
      userDetails._id,
      { password: NewPassword },
      { new: true }
    );

    // Send an email notification about the password update
    const emailResponse = await mailSender(
      updatedUser.email,
      "Password Updated",
      passwordUpdated(
        updatedUser.email,
        `Password updated successfully for ${updatedUser.firstName} ${updatedUser.lastName}`
      )
    );

    console.log("Email sent successfully:", emailResponse.response);

    return res.status(200).json({
      success: true,
      msg: "Password changed successfully.",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      msg: "Failed to change the password. Please try again later.",
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
