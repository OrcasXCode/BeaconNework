import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../src/assets/faviconbn (1).png"
import HighlightText from "../components/HighLightText";

// fontFamily: 'Diphylleia' 
export function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    return(
        <div style={{position: "relative", width: "100%", height: "100vh"}} >
        <img src={favicon} style={{height:'70px'}}></img>   
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center",height:'545px',width:'665px'}}>   
        <h1 style={{ fontSize:'36px', lineHeight:'36px'}}><HighlightText text={"Sign in to your Account"} /></h1>
        <p style={{ fontFamily: 'Playfair Display' }}>
  Don't have an account? <span><Link to="./signup" style={{ fontFamily: 'yourFontName', fontWeight: 'bold',color:'black', textDecoration: "none"}}>Create a free account</Link></span>
</p>
            <div style={{marginTop:'50px'}}>
            <p style={{marginLeft:'-335px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
            <input style={{margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
                setEmail(e.target.value);
            }}></input>
            </div>
            
            <div style={{width:'400px',marginLeft:'117px'}}>
                <Link to="/forgot-password" style={{textDecoration: "none"}}>
                <p  style={{margin:10, padding:5, fontSize:'small',marginRight:'-350px', marginBottom:'-32px',fontWeight: 'bold',color:'black'}} >Forgot Password?</p>
                </Link>
                <p style={{marginLeft:'-328px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Password<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{margin:10, padding:5,width:'400px',height:'20px',  borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                    setPassword(e.target.value);
                }}></input>
            </div>
            
            <button style={{margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}}  onClick={()=>{
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
        
    </div>
    )
}