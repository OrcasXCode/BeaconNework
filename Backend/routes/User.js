const {Router} =require("express")
const router=Router();
const {User} =require("../db/index")
const {JWT_SECRET} = require("../config")
const jwt =require("jsonwebtoken")


router.post('/signup',async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const gender=req.body.gender;
    await User.create({
        name:name,
        email:email,
        password:password,
        gender:gender
    })
    res.json({
        msg:"User created successfully"
    })
});

router.post("/signin",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user = await User.findOne({
        email,
        password
    })
    if(user){
        const token=jwt.sign(email,JWT_SECRET)
        res.status(200).json({
            token
        })
    }else{
        res.json({
            msg:"Incorrect username or password"
        })
    }
})


module.exports=router