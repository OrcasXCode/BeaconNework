import { useState } from "react"
import favicon from "../src/assets/faviconbn (1).png"
import HighlightText from "../components/HighLightText";
import { Link } from "react-router-dom";


export function Signup(){

    //state
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[gender,setGender]=useState("");


    return(
        // <div>
        //     <h1>Sign Up</h1>
        //     <input style={{margin:10,padding:5}} type="text" placeholder="enter your name" onChange={function(e){
        //         const value=e.target.value;
        //         setName(value);
        //     }}></input><br></br>
        //     <input style={{margin:10,padding:5}} type="text" placeholder="enter your email" onChange={function(e){
        //         const value=e.target.value;
        //         setEmail(value);
        //     }}></input><br></br>
        //     <input style={{margin:10,padding:5}} type ="text" placeholder="enter your password" onChange={function(e){
        //         const value=e.target.value;
        //         setPassword(value)
        //     }}></input><br></br>
        //     <input style={{margin:10,padding:5}} type="text" placeholder="enter your gender" onChange={function(e){
        //         const value=e.target.value;
        //         setGender(value);
        //     }}></input><br></br>
        //     <button style={{margin:10,padding:5}} onClick={()=>{
        //         fetch("http://localhost:3000/user/signup",{
        //             method:"POST",
        //             body:JSON.stringify({
        //                 name,
        //                 email,
        //                 password,
        //                 gender
        //             }),
        //             headers:{
        //                 "Content-type":"application/json"
        //             }
        //         })
        //         .then(async function(res){
        //             if(res.ok){
        //                 const json=await res.json();
        //                 alert("Signup successfull")
        //             }
        //             else{
        //                 throw new Error("Signup Failed")
        //             }
        //         })
        //         .catch((e)=>{
        //             alert("Fill out all the required fields correctly")
        //         })
        //     } } >Create Account</button>
        // </div>

        <div style={{position: "relative", width: "100%", height: "100vh"}} >
        <img src={favicon} style={{height:'70px'}}></img>   
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center",height:'545px',width:'665px'}}>   
        <h1 style={{ fontSize:'36px', lineHeight:'36px'}}><HighlightText text={"Sign up to create Account"} /></h1>
        <p style={{ fontFamily: 'Playfair Display' }}>
        Already have an account ?  <span><Link to="/signin" style={{ fontFamily: 'yourFontName', fontWeight: 'bold',color:'black', textDecoration: "none"}}>Sign In</Link></span>
</p>

            <div style={{marginTop:'50px'}}>
                <p style={{marginLeft:'-372px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Name<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                    setName(e.target.value);
                }}></input>
            </div>   


            <div style={{marginTop:'21px'}}>
                <p style={{marginLeft:'-330px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{margin:10, padding:5,width:'400px',height:'20px', borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="xyz@gmail.com" onChange={function(e){
                    setEmail(e.target.value);
                }}></input>
            </div>
            
            <div style={{width:'400px',marginLeft:'117px'}}>
                <p style={{marginLeft:'-322px',marginBottom:'-10px',fontWeight:'bold',fontSize:'12px',fontFamily: 'Playfair Display'}}>Password<sup style={{color:'#EF476F'}}>*</sup></p>
                <input style={{margin:10, padding:5,width:'400px',height:'20px',  borderRadius: '3px',border:'0.5px solid grey'}} type="text" placeholder="" onChange={function(e){
                    setPassword(e.target.value);
                }}></input>
            </div>
            <button style={{margin:10, padding:5,width:'415px',height:'35px', color:'white',background:'#084C98', borderRadius: '8px',border:'none',marginTop:'30px'}}onClick={()=>{
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
        
    </div>
    )
}