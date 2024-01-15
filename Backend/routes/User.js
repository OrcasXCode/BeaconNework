const {Router} =require("express")
const router=Router();
const jwt =require("jsonwebtoken")
const {userCreate} = require("../type")
const otpgenerator=require("otp-generator");
const { OTP } = require("../db/OTP.JS");
const mailSender = require("../utils/mailSender");
const { sendOTP } = require("../mail/templates/sendOTP");
const dotenv=require("dotenv")
require("dotenv").config()

router.post('/signup',async (req,res)=>{
    const createUser=req.body;
    const userPayload=userCreate.safeParse(createUser);
    if(!userPayload.success){
        res.status(411).json({
            msg:"Wrong Inputs"
        })
        return;
    }
    await User.create({
        name:createUser.name,
        email:createUser.email,
        password:createUser.password,
        // gender:createUser.gender
    })
    res.json({
        msg:"User created successfully"
    })
});

router.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    
    try{
        const user = await User.findOne({
            email,
            password
        })
        if(user){
            const token=jwt.sign(email,process.env.JWT_SECRET)
            res.status(200).json({
                token
            })
        }
        else{
            res.status(403).json({msg:"Invalid Email or Password"})
        }
    }
    catch(e){
            res.json({
                msg:"User dosen't exists"
            })
    }
})


router.post("/forgot-password",async(req,res)=>{
    const email=req.body.email;
    try{
        const userCheck= await User.findOne({
            email,
        })
        if(userCheck){
            
        }
    }
    catch(e){
        console.log("Error in forgot password")
    }
})


router.post("/register-email",async(req,res)=>{
    const email=req.body.email;
    try{
        const checkEmail= await User.findOne({
            email:email
        })
        if(checkEmail){
            return res.status(404).json({
                success:false,
                msg:'This email is already registered.'
            })
        }

        const registerNewEmail=await User.create({
            email:email
        })
        return res.status(200).json({
            success:true,
            msg:"User email successfully registered",
            registerNewEmail
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            msg:"server error  failed to register your email"
        })
    }
})


router.post("/send-otp",async(req,res)=>{
    try{
        const email=req.body.email;
        let otp=otpgenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
            specialChars:false,
            numbersOnly:true
        })
        const result=await OTP.findOne({
            otp
        })
        while(result){
            otp=otpgenerator.generate(6,{
                upperCaseAlphabets:false
            })
        }
        const otpPayload={email,otp}
        const otpBody=await OTP.create(otpPayload)
        const sendOTPEmail=await mailSender(email,"OPT sent successsfuly",sendOTP(email,otp))
        res.status(200).json({
            success:true,
            msg:"OTP sent successfully",
            otp,
        })
    }
    catch(error){
        console.log("Error in sending OTP : ",error);
        return res.status(500).json({
            success: false,
            message: "Server Error! Failed to send OTP."
        })
    }
})


module.exports=router