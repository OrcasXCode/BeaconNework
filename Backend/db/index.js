const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://userdb:1234@cluster0.fqpdeka.mongodb.net/Beacon-Network")

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    gender:String,
})


const User=mongoose.model('User',UserSchema);
module.exports={
    User
}