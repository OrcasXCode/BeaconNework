import { useState } from "react"
import { Link } from "react-router-dom"


export function ForgotPassword(){

    const[email,setEmail]=useState("");
    const [sentEmail,setsentEmail]=useState(false);

    return(
        <div>
            <h1>{!sentEmail ? "Reset your password" : "Check Email"}</h1>
            <p>{!sentEmail ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`}</p>
            <form> {!sentEmail ? (<label>
                    <p>Email Address<sup>*</sup></p>
                    <input type="text" placeholder="xyz@gmail.com" onChange={function(e){
                        setEmail(e.target.value);
                    }}></input><br></br>
                    <button onClick={()=>{
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
                <Link to={"/signin"}>
                        <p>Back to Login</p>
                </Link>                
            </form>
        </div>
    )
}