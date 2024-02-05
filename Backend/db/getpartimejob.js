const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://userdb:1234@cluster0.fqpdeka.mongodb.net/Beacon-Network")

const PartTimeJobSchema = new mongoose.Schema({
  email: String,
});

const GetAPartTimeJob = mongoose.model("GetAPartTimeJob", PartTimeJobSchema);
module.exports = {
  GetAPartTimeJob,
};
