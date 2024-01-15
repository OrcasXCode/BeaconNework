import { useState } from "react"
import { Link } from "react-router-dom"
import HighlightText from "../components/HighLightText";
import favicon from "../src/assets/faviconbn (1).png"

export function ForgotPassword(){

    const[email,setEmail]=useState("");
    const [sentEmail,setsentEmail]=useState(false);

    return(
        <div>
            <img src={favicon} style={{height:'70px'}}></img>
            <div style={{height:'545px',width:'665px',textAlign:"center", margin:'0 auto'}}>
            <h1>{!sentEmail ? <HighlightText text="Reset your password "></HighlightText>: <HighlightText text='Check Email'></HighlightText>}</h1>
            <p style={{ fontFamily: 'Playfair Display' }}>{!sentEmail ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`}</p>
            <form> {!sentEmail ? (<label>
                <div style={{marginTop:'50px'}}>
                    <p style={{marginLeft:'-328px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
                    <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
                        setEmail(e.target.value);
                    }}></input>
                </div><br></br>
                    <button style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}} onClick={()=>{
                        fetch("http://localhost:3000/user/forgot-password",{
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
                                const userEmail=res.json();
                                alert("Email sent successfull")
                                setsentEmail==true;
                            }
                            else{
                                alert("Email not sent")
                            }
                        })
                    }}>Reset Password</button>
                    
                </label>): (
                    <button>Resend Email</button>
                )}
                <Link style={{textDecoration: "none",color:'black',fontWeight:'bold',fontSize:'15px',fontFamily: 'Playfair Display'}} to={"/signin"}>
                        <p>Back to Login</p>
                </Link>                
            </form>
        </div>
        </div>
    )
}