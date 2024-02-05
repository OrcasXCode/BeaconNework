const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://userdb:1234@cluster0.fqpdeka.mongodb.net/Beacon-Network")

const SellerSchema = new mongoose.Schema({
  email: String,
});

const BeacomeASeller = mongoose.model("BeacomeASeller", SellerSchema);
module.exports = {
  BeacomeASeller,
};
