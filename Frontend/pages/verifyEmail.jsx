import { useState } from "react"
import { Link } from "react-router-dom"
import HighlightText from "../components/HighLightText";
import favicon from "../src/assets/faviconbn (1).png"


export function VerifyEmail(){

    const[email,setEmail]=useState("");
    const[otp,setOTP]=useState(0)
    const [sentOTP,setSentOTP]=useState(false);

    return(
        <div style={{ width: "100%", height: "100%"}}>
            <img src={favicon} style={{height:'70px'}}></img>   
            <div style={{height:'545px',width:'665px',textAlign:"center", margin:'0 auto'}}>
            <h1>{<HighlightText text="Check Email"></HighlightText>}</h1>
            <p style={{ fontFamily: 'Playfair Display' }}>{`We have sent the otp to ${email} , please do not share with anyone else or it may lead to some security issues`}</p>
            <form> { 
                    (<label>
                        <div style={{marginTop:'50px'}}>
                            <p style={{marginLeft:'-328px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
                            <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="email"></input>
                            <p style={{marginLeft:'-390px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>otp<sup style={{color:'#EF476F'}}>*</sup></p>
                            <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="45XXXX" onChange={function(e){
                                setOTP(e.target.value);
                            }}></input>
                        </div><br></br>
                            <button style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}} 
                            onClick={()=>{
                                    fetch("http://localhost:3000/user/register-email",{
                                    method:"POST",
                                    body:JSON.stringify({
                                        email,
                                    }),
                                    headers:{
                                        "Content-type":"application/json"
                                    }
                                    })
                                    .then(async function(res){
                                        if(res.ok){
                                            const userotp=await res.json();
                                            alert("otp sent successfully")
                                            setSentOTP(true);
                                        }
                                        else{
                                            alert("otp not sent")
                                        }
                                    })
                                }
                            }>Register Email</button>
                            
                        </label>)
                }
                <Link style={{textDecoration: "none",color:'black',fontWeight:'bold',fontSize:'15px',fontFamily: 'Playfair Display'}} to={"/signin"}>
                        <p>Back to Sign Up</p>
                </Link>                
            </form>
        </div>
        </div>
    )
}