const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 60 * 5,
  },
});

const registerEmail = mongoose.model("registerEmail", registerSchema);
module.exports = {
  registerEmail,
};
