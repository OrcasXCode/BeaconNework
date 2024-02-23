const mongoose=require("mongoose");


const SingleTeamSchema=new mongoose.Schema({
    createdAt:{
        type:Date,
        default:Date.now,
    },
    teamLeader:{
        type:String,
        required:true,
        unique:true,
    },
    teamLeaderemail:{
        type:String,
        required:true,
        unique:true,
    },
})


const SingleTeam=mongoose.model('SingleTeam',SingleTeamSchema);
module.exports={
    SingleTeam
}