import { useState } from "react"



export function Signup(){

    //state
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");


    return(
        <div>
            <h1>Sign Up</h1>
            <input style={{margin:10,padding:5}} type="text" placeholder="enter your name" onChange={function(e){
                const value=e.target.value;
                setName(value);
            }}></input><br></br>
            <input style={{margin:10,padding:5}} type="text" placeholder="enter your email" onChange={function(e){
                const value=e.target.value;
                setEmail(value);
            }}></input><br></br>
            <input style={{margin:10,padding:5}} type ="text" placeholder="enter your password" onChange={function(e){
                const value=e.target.value;
                setPassword(value)
            }}></input><br></br>
            <input style={{margin:10,padding:5}} type="text" placeholder="enter your gender" onChange={function(e){
                const value=e.target.value;
                setGender(value);
            }}></input><br></br>
            <button style={{margin:10,padding:5}} onClick={()=>{
                fetch("http://localhost:3000/user/signup",{
                    method:"POST",
                    body:JSON.stringify({
                        name,
                        email,
                        password,
                        gender
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async function(res){
                    if(res.ok){
                        const json=await res.json();
                        alert("Signup successfull")
                    }
                    else{
                        throw new Error("Signup Failed")
                    }
                })
                .catch((e)=>{
                    alert("Fill out all the required fields correctly")
                })
            } } >Create Account</button>
        </div>
    )
}