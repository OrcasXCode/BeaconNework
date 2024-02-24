import React, { useState} from "react";
import {useNavigate } from "react-router-dom";
import HighlightText from "../components/HighLightText";
import { toast, Toaster } from "react-hot-toast";
import register from '../src/assets/register.png'
import { ArrowRight } from 'lucide-react'


export function RegisterEmail() {
  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  const handleSendOTP = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/registeremail", {
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
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24" id="signin">
        <div>
        <Toaster />
      </div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={register} style={{height:'80px'}}></img>
          </div>
          <h2  style={{fontFamily: 'Playfair Display'}}className="text-center text-4xl font-bold leading-tight text-black">
            <HighlightText text={"Register your email"} />
          </h2>
          <p  className="mt-2 text-center text-sm text-gray-600 ">
             Already registered your email?{' '}
            <a
              href="/signup"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Sign up for free
            </a>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
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
              </div>
              <div>
                <button
                  type="button"
                  style={{background:'#084C98'}}
                  className="inline-flex mb-4 w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={() => {
                        fetch("http://localhost:3000/user/signin", {
                          method: "POST",
                          body: JSON.stringify({
                            email,
                            password,
                          }),
                          headers: {
                            "Content-type": "application/json",
                          },
                        })
                          .then(async function (res) {
                              if(res.ok){
                                const json = await res.json();
                                toast.success("Sign In successful");
                                const token=json.token;
                                localStorage.setItem('jsonwebtoken',token);
                                setTimeout(() => {
                                  window.location.reload();
                                  window.location.href = '/';
                                }, 1000);
                              }
                              else{
                                throw new Error();
                              }
                          })
                          .catch((e) => {
                            toast.error("Incorrect username or password");
                          });
                        }}
                >
                  Register<ArrowRight className="ml-2" size={16} />
                </button>
                {/* <div id="sign-in-div" className="flex w-full justify-center items-center"></div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
