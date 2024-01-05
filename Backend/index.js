const express = require("express");
const app=express();
const bodyParser=require("body-parser")
const userRouter=require("../Backend/routes/User")
const cors=require("cors")


app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

app.use("/user",userRouter)


app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
    