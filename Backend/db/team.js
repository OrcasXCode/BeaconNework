const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  teamLeader: {
    type: String,
    required: true,
  },
  teamLeaderEmail: {
    type: String,
    required: true,
    unique: true,
  },
  participants: [
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],
});

const Team = mongoose.model("Team", TeamSchema);
module.exports = {
  Team,
};
