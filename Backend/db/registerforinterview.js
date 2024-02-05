const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://userdb:1234@cluster0.fqpdeka.mongodb.net/Beacon-Network")

const InterviewSchema = new mongoose.Schema({
  email: String,
});

const RegisterForInterview = mongoose.model(
  "RegisterForInterview",
  InterviewSchema
);
module.exports = {
  RegisterForInterview,
};
