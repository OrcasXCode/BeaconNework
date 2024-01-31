import { useState } from "react"
import { Link } from "react-router-dom"
import HighlightText from "../components/HighLightText";
import { Toaster } from "react-hot-toast";
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import changepassword from '../src/assets/changepassword.png'




export function ChangePassword(props) {
    

    return (
        <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div>
        <Toaster/>
      </div>
       
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
            <img src={changepassword} style={{height:'60px'}}></img>
          </div>
          <h2  style={{fontFamily: 'Playfair Display'}}className="text-center text-4xl font-bold leading-tight text-black">
            <HighlightText text="Choose a new password"></HighlightText>
          </h2>
        <p className="text-center " style={{margin:'15px',fontFamily: 'Playfair Display' }}>Enter a new password that is both secure and easy to remember to prevent further security issues.</p>

            <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  New password{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Enter your new password"
                    onChange={(e) => {
              setEmail(e.target.value);
            }}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Confirm new password{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
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
                        window.location.href = '/verify-email';
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
                                // window.location.href = '/';
                            }
                            else{
                                alert("Email not sent")
                            }
                        })
                    }}
                >
                  Change Password <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>  
          </form>
        </div>
      </div>
    </section>
    )
}
