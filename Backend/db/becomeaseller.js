const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  email: String,
});

const BeacomeASeller = mongoose.model("BeacomeASeller", SellerSchema);
module.exports = {
  BeacomeASeller,
};
