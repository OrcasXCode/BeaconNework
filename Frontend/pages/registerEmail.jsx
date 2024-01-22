// import { useState } from "react"
// import { Link,Redirect} from "react-router-dom"
// import HighlightText from "../components/HighLightText";
// import favicon from "../src/assets/faviconbn (1).png"


// export function RegisterEmail(){

//     const[email,setEmail]=useState("");

//     return(
//         <div style={{ width: "100%", height: "100%"}}>
//             <img src={favicon} style={{height:'70px'}}></img>   
//             <div style={{height:'545px',width:'665px',textAlign:"center", margin:'0 auto'}}>
//             <h1> <HighlightText text="Register Email"></HighlightText></h1>
//             <p style={{ fontFamily: 'Playfair Display' }}>Have no fear. We'll email you instructions to register your email.</p>
//             <form> (<label>
//                 <div style={{marginTop:'50px'}}>
//                     <p style={{marginLeft:'-328px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
//                     <input style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
//                         setEmail(e.target.value);
//                     }}></input>
//                 </div><br></br>
//                     <button style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}} 
//                     onClick={()=>{
//                                 fetch("http://localhost:3000/user/send-otp",{
//                                     method:"POST",
//                                     body:JSON.stringify({
//                                         email,
//                                     }),
//                                     headers:{
//                                         "Content-type":"application/json"
//                                     }
//                                 })
//                                 .then(async function(res){
//                                     if(res.ok){
//                                         const json=await res.json();
//                                         toast.success("otp sent successfull")
//                                         <Redirect>
//                                     }
//                                     else{
//                                         throw new Error("otp failed to sent ")
//                                     }
//                                 })   
//                                 .catch((e)=>{
//                                     toast.error("Incorrect username")
//                                 })  
//                         }
//                     }>Send OTP</button>
                    
//                 </label>)
//                 <Link style={{textDecoration: "none",color:'black',fontWeight:'bold',fontSize:'15px',fontFamily: 'Playfair Display'}} to={"/signin"}>
//                         <p>Back to Sign Up</p>
//                 </Link>                
//             </form>
//         </div>
//         </div>
//     )
// }


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HighlightText from "../components/HighLightText";
import favicon from "../src/assets/logo.png";

export function RegisterEmail() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  const handleSendOTP = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/send-otp", {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
  
      if (response.ok) {
        alert("OTP sent successfully");
        navigate("/verify-email");
      } else {
        // Handle non-successful response (e.g., HTTP status code other than 200)
        console.error("Failed to send OTP:", response.statusText);
        alert("Failed to send OTP");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error sending OTP:", error);
      alert("Error sending OTP");
    }
  };
  
  


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img src={favicon} style={{ height: "70px" }} alt="Favicon" />
      <div style={{ height: "545px", width: "665px", textAlign: "center", margin: "0 auto" }}>
        <h1>
          <HighlightText text="Register Email" />
        </h1>
        <p style={{ fontFamily: "Playfair Display" }}>
          Have no fear. We'll email you instructions to register your email.
        </p>
        <form>
          <label>
            <div style={{ marginTop: "50px" }}>
              <p style={{ marginLeft: "-328px", marginBottom: "-10px", fontWeight: "bold", fontSize: "12px", fontFamily: "Playfair Display" }}>
                Email Address<sup style={{ color: "#EF476F" }}>*</sup>
              </p>
              <input
                style={{ fontFamily: "Playfair Display", margin: 10, padding: 5, width: "400px", height: "20px", borderRadius: "3px", border: "0.5px solid grey" }}
                type="text"
                placeholder="xyz@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br></br>
            <button
              style={{ fontFamily: "Playfair Display", margin: 10, padding: 5, width: "415px", height: "35px", color: "white", background: "#084C98", borderRadius: "8px", border: "none", marginTop: "30px" }}
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </label>
          <Link
            style={{ textDecoration: "none", color: "black", fontWeight: "bold", fontSize: "15px", fontFamily: "Playfair Display" }}
            to={"/signin"}
          >
            <p>Back to Sign Up</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
