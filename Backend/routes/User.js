const {Router} =require("express")
const router=Router();
const {User} =require("../db/index")
const {JWT_SECRET} = require("../config")
const jwt =require("jsonwebtoken")
const {userCreate} = require("../type")

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
            const token=jwt.sign(email,JWT_SECRET)
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


router.post("/forgot-password",(req,res)=>{
    const email=req.body.email;
    try{
        const userCheck=User.findOne({
            email,
        })
        if(userCheck){
            
        }
    }
    catch(e){
        console.log("Error in forgot password")
    }
})


module.exports=router