import { useState } from "react"
import { Link } from "react-router-dom"
import HighlightText from "../components/HighLightText";
import favicon from "../src/assets/faviconbn (1).png"
import { Toaster } from "react-hot-toast";
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import forgotpassword from '../src/assets/forgot-password.png'



export function ForgotPassword() {

    const [email, setEmail] = useState("");
   const [sentEmail,setsentEmail]=useState(false);
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div>
        <Toaster/>
      </div>
       
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
            <img src={forgotpassword} style={{height:'60px'}}></img>
          </div>
          <h2  style={{fontFamily: 'Playfair Display'}}className="text-center text-4xl font-bold leading-tight text-black">
            {!sentEmail ? <HighlightText text="Reset your password "></HighlightText>: <HighlightText text='Check Email'></HighlightText>}
          </h2>
        <p className="text-center " style={{margin:'15px',fontFamily: 'Playfair Display' }}>{!sentEmail ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`}</p>

            <form action="#" method="POST" className="mt-8">
                {!sentEmail ? <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
              setEmail(e.target.value);
            }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  style={{background:'#084C98'}}
                  className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={()=>{
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
                    }}
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
                <Link
                    className="inline-flex items-center justify-center px-3.5 py-2.5 text-black font-bold text-base font-playfair"
                    style={{ textDecoration: "none" }}
                    to={"/signin"}
                    >
                    <ArrowLeft className="mr-2" size={16} />
                    <p className="pt-1">Back to Login</p>
                </Link>
  
              </div>
            </div> : <button>Resend Email</button> }    
          </form>
        </div>
      </div>
    </section>
  )
}
