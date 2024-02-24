const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);
module.exports = { ContactUs };
