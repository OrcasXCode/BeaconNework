import { useState } from "react"
import favicon from "../src/assets/faviconbn (1).png"
import HighlightText from "../components/HighLightText";
import { Link } from "react-router-dom";
import { Toaster,toast } from "react-hot-toast";

export function Signup(){

    //state
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    // const[gender,setGender]=useState("");

    


    return(

        <div style={{width: "100%", height: "100%"}} >
        <div><Toaster></Toaster></div>
        <img src={favicon} style={{height:'70px'}}></img>   
        <div style={{textAlign: "center",height:'545px',width:'665px',margin:'0 auto'}} >   
            <h1 style={{ fontSize:'36px', lineHeight:'36px'}}><HighlightText text={"Sign up to create Account"} /></h1>
            <p style={{ fontFamily: 'Playfair Display' }}>
                Already have an account ?  <span><Link to="/signin" style={{ fontFamily: 'yourFontName', fontWeight: 'bold',color:'black', textDecoration: "none"}}>Sign In</Link></span>
            </p>

            <div style={{marginTop:'50px'}}>
                <p style={{marginLeft:'-372px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Name<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{fontFamily: 'Playfair Display',margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                    setName(e.target.value);
                }}></input>
            </div>   


            <div style={{marginTop:'21px'}}>
                <p style={{marginLeft:'-330px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{fontFamily: 'Playfair Display',margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
                    setEmail(e.target.value);
                }}></input>
            </div>

            <div style={{marginTop:'21px'}}>
                <p style={{marginLeft:'-350px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Password<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{fontFamily: 'Playfair Display',margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                    setPassword(e.target.value);
                }}></input>
            </div>
            

            <button style={{fontFamily: 'Playfair Display' ,margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}}onClick={()=>{
                fetch("http://localhost:3000/user/signup",{
                    method:"POST",
                    body:JSON.stringify({
                        name,
                        email,
                        password,
                        // gender
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                .then(async function(res){
                    if(res.ok){
                        const json=await res.json();
                        toast.success("Sign Up successfull")
                    }
                    else{
                        throw new Error("Sign Up Failed")
                    }
                })
                .catch((e)=>{
                    toast.error("Fill out all the required fields correctly")
                })
            } } >Create Account</button>
        </div>
        
    </div>
    )
}