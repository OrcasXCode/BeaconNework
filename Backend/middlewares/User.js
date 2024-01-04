const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")


function  userMiddleware(req,res,next){
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwttoken=words[1];
    try{
        const decodedValue=jwt.verify(jwttoken,JWT_SECRET);
        if(decodedValue.email){
            next();
        }
        else{
            res.status(411).json({
                msg:"Unauthorized"
            })
        }
    }
    catch(e){
        res.json({
            msg:"Incorrect password or username"
        })
    }
}


module.exports={
    userMiddleware
}

