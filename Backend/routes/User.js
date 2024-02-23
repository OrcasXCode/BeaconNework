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
const { SingleTeam } = require("../db/singleteam");
const { Team } = require("../db/team");
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

router.post("/googlesignin", async (req, res) => {
  try {
    const googlesignintoken = req.body.googlesignintoken;
    if (!googlesignintoken) {
      return res.status(401).json({
        success: false,
        message: "No Token Provided!",
      });
    }
    const decodedToken = jwt.decode(googlesignintoken);
    console.log(decodedToken);
    const name = decodedToken.name;
    const email = decodedToken.email;
    const password = decodedToken.sub;

    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    const token = jwt.sign(
      { _id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    localStorage.setItem("jsonwebtoken", token);
    return res.status(200).json({
      success: true,
      msg: "token decoded successfully",
      token,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Failed to decode the token",
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
        msg: "No user found with this email you need to register first",
      });
    }

    var otp = otpgenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpgenerator.generate(6, {
        upperCaseAlphabets: false,
      });
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

//CREATE A TEAM FOR SINGLE PARTICIPANT
// router.post("/singleParticipant", async (req, res) => {
//   try {
//     const { participant, participantemail } = req.body; // Extract participant and participantemail from req.body

//     if (!participant || !participantemail) {
//       throw new Error("Please provide participant details");
//     }

//     // Create a new single team participant
//     const singleTeamParticipant = await SingleTeam.create({
//       teamLeader: participant,
//       teamLeaderemail: participantemail,
//     });

//     // Log the output   console.log("Single team participant created:", singleTeamParticipant);

//     // Return the created single team participant
//     res.json({
//       success: true,
//       data: singleTeamParticipant,
//       error: null,
//     });
//   } catch (error) {
//     // Log the error
//     console.error(
//       "Error occurred while creating single team participant:",
//       error
//     );
//     // Return the error
//     res.status(500).json({
//       success: false,
//       data: null,
//       error: error.message, // Return only the error message
//     });
//   }
// });

// //CREATE A NEW TEAM
// router.post("/createteam", async (req, res) => {
//   try {
//     const { teamLeader, teamLeaderEmail, participants } = req.body;

//     // Check if there are at least one and at most three participants
//     if (!participants || participants.length < 1 || participants.length > 3) {
//       return res.status(400).json({
//         success: false,
//         error:
//           "Invalid number of participants. There should be at least one participant but not more than three.",
//       });
//     }

//     // Check if the participants exist or not
//     const participantEmails = participants.map(
//       (participant) => participant.email
//     );
//     const existingParticipants = await User.find({
//       email: { $in: participantEmails },
//     });

//     // Create a new team
//     const newTeamData = {
//       teamLeader,
//       teamLeaderEmail,
//       participants,
//     };
//     const newTeam = await Team.create(newTeamData);

//     // Return the new team
//     res.json(newTeam.toJSON());
//   } catch (error) {
//     // Handle the error
//     console.error("Error occurred while creating team:", error);
//     res.status(500).json({ success: false, data: null, error: error.message });
//   }
// });

// //JOIN AN EXISTING TEAM
// router.post("/jointeam", async (req, res) => {
//   try {
//     const { teamId } = req.body;
//     const { participant, participantemail } = req.body;

//     // Find the team to join by its ID
//     const teamtoJoin = await Team.findById(teamId);
//     if (!teamtoJoin) {
//       return res
//         .status(404)
//         .json({ error: "The team with this ID is not found" });
//     }

//     // Check if the participant is already a member
//     const isParticipant = teamtoJoin.participants.some(
//       (participant) => participant.email === participantemail
//     );
//     if (isParticipant) {
//       return res
//         .status(400)
//         .json({ error: "Participant is already a member of this team" });
//     }

//     // Create a new participant object
//     const newParticipant = { name: participant, email: participantemail };

//     // Update the team document to add the new participant
//     teamtoJoin.participants.push(newParticipant);
//     const updatedTeam = await teamtoJoin.save();

//     // Update user's teamId
//     const userToUpdate = await User.findOneAndUpdate(
//       { email: participantemail },
//       { teamId },
//       { new: true }
//     );

//     // Return the updated team
//     res.json(updatedTeam.toJSON());
//   } catch (error) {
//     console.error("Error occurred while joining team:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = router;
