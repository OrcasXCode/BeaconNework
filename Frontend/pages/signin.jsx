import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../src/assets/faviconbn (1).png"
import HighlightText from "../components/HighLightText";
import {toast,Toaster} from "react-hot-toast"

export function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");



    return(

        
        <div style={{ width: "100%", height: "100%"}} >
            <div><Toaster/></div>
            <img src={favicon} style={{height:'70px'}}></img>   
            <div style={{textAlign: "center",height:'545px',width:'665px',margin:'0 auto'}}>   
                <h1 style={{ fontSize:'36px', lineHeight:'36px'}}><HighlightText text={"Sign in to your Account"} /></h1>
                <p style={{ fontFamily: 'Playfair Display' }}>
                    Don't have an account? <span><Link to="/signup" style={{ fontFamily: 'yourFontName', fontWeight: 'bold',color:'black', textDecoration: "none"}}>Create a free account</Link></span>
                </p>

                <div style={{marginTop:'50px'}}>
                    <p style={{marginLeft:'-328px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
                    <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
                        setEmail(e.target.value);
                    }}></input>
                </div>

                <div style={{marginTop:'30px'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{marginLeft:'128px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Password<sup style={{color:'#EF476F'}}>*</sup></p>
                        <Link to="/forgot-password" style={{marginBottom:'0px', marginRight:'125px',textDecoration: "none",color:'black',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Forgot Password?</Link>
                    </div>
                    
                    <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                        setPassword(e.target.value);
                    }}></input>
                </div>
                
                
                <button style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}}  onClick={()=>{
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
                            const json=await res.json();
                            toast.success("Sign In successfull")
                        }
                        else{
                            throw new Error("Sign In Failed")
                        }
                    })   
                    .catch((e)=>{
                        toast.error("Incorrect username or password")
                    })           
                }}>Get Started</button>
            </div>
    </div>
    )
}

