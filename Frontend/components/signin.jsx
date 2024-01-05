import { useState } from "react";

export function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    return(
        <div>
        <h1>Sign In</h1>
        <input style={{margin:10, padding:5}} type="text" placeholder="enter your email" onChange={function(e){
            setEmail(e.target.value);
        }}></input><br></br>
        <input style={{margin:10, padding:5}} type="text" placeholder="enter your email" onChange={function(e){
            setPassword(e.target.value);
        }}></input><br></br>
        <button style={{margin:10, padding:5}}  onClick={()=>{
            fetch("http://localhost:3000/user/signin",{
                method:"POST",
                body:JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then(async function(res){
                if(res.ok){
                    let userData=res.json()
                    alert("SignIn Successfull")
                }
                else{
                    throw new Error("Sign in Failed")
                }
            })
            .catch((e)=>{
                alert("Incorrect username or password")
            })
        }}>Get Started</button>
        
    </div>
    )
}