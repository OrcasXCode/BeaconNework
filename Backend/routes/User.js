const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { userCreate } = require("../type");
const otpgenerator = require("otp-generator");
const { OTP } = require("../db/OTP.JS");
const mailSender = require("../utils/mailSender");
const { sendOTP } = require("../mail/templates/sendOTP");
const { User } = require("../db/User");
const dotenv = require("dotenv");
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
    // gender:createUser.gender
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
    if (user) {
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      const token = jwt.sign(
        { _id: user._id.toString(), email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.cookie("token", token, options).status(200).json({
        token,
      });
    } else {
      res.status(403).json({ msg: "Invalid Email or Password" });
    }
  } catch (e) {
    console.log(e);
    res.json({
      msg: "User dosen't exists",
    });
  }
});

router.post("/forgot-password", async (req, res) => {
  const email = req.body.email;
  const otp = req.body.otp;
  try {
    const user = await User.findOne({
      email,
    });

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        msg: "Email and OTP are required fields!",
      });
    }

    const otpCheck = await OTP.find({
      email,
    })
      .sort({
        createdAt: -1,
      })
      .limit(1);

    if (otpCheck.length === 0) {
      return res.status(403).json({
        success: false,
        msg: "Invalid OTP",
      });
    } else if (otp !== otpCheck[0].otp) {
      return res.status(404).json({
        success: false,
        msg: "Invalid OTPs",
      });
    }
    const token = jwt.sign(
      { _id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("token", token, options).status(200).json({
      token,
    });
    return res.status(200).json({
      success: true,
      msg: "otp and email verified successfully",
    });
  } catch (e) {
    console.log("Error in forgot password");
  }
});

router.use("/change-password", userMiddleware);
router.post("/change-password", async (req, res) => {
  try {
    const userDetails = await User.findById(req.user._id);
    const NewPassword = req.body.NewPassword;
    const ConfirmNewPassword = req.body.ConfirmNewPassword;

    if (NewPassword === ConfirmNewPassword) {
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

// router.post("/register-email", async (req, res) => {
//   const email = req.body.email;
//   const otp = req.body.otp;
//   try {
//     if (!email || !otp) {
//       return res.status(400).json({
//         success: false,
//         msg: "Email and OTP are required fields!",
//       });
//     }

//     const otpCheck = await OTP.find({
//       email,
//     })
//       .sort({
//         createdAt: -1,
//       })
//       .limit(1);
//     if (otpCheck.length === 0) {
//       return res.status(403).json({
//         success: false,
//         msg: "Invalid OTP",
//       });
//     } else if (otp !== otpCheck[0].otp) {
//       return res.status(404).json({
//         success: false,
//         msg: "Invalid OTPs",
//       });
//     }

//     const checkEmail = await User.findOne({
//       email: email,
//     });
//     if (checkEmail) {
//       return res.status(404).json({
//         success: false,
//         msg: "This email is already registered.",
//       });
//     }

//     const registerNewEmail = await User.create({
//       email: email,
//     });
//     return res.status(200).json({
//       success: true,
//       msg: "User email successfully registered",
//       registerNewEmail,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       msg: "server error  failed to register your email",
//     });
//   }
// });

router.post("/send-otp", async (req, res) => {
  try {
    const email = await req.body.email;
    let otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      specialChars: false,
      numbersOnly: true,
    });
    const result = await OTP.findOne({
      otp,
    });
    while (result) {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    const sendOTPEmail = await mailSender(
      email,
      "OPT sent successsfuly",
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
