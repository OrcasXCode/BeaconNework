import { useState } from "react";
import HighlightText from "../components/HighLightText";
import { toast, Toaster } from "react-hot-toast";
import React from 'react'
import { ArrowRight } from 'lucide-react'
import signin from '../src/assets/signin.png'
import { GoogleLogin } from 'react-google-login';
import { useEffect } from "react";
import {gapi} from "gapi-script";


export function SignIn() {

  
const clientId ="537879712076-qaonqhsbtt9ft8bn57p7g4lnda0odeto.apps.googleusercontent.com";

  const responseGoogle = async (response) => {
  try {
    if (response?.profileObj) {
      // Assuming you have a server endpoint for handling Google login
      const serverResponse = await fetch("http://localhost:3000/user/google-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: response.tokenId, // Google's ID token
          email: response.profileObj.email,
          name: response.profileObj.name,
        }),
      });

      if (serverResponse.ok) {
        const serverData = await serverResponse.json();
        console.log(serverData);

        // Handle successful login on the client side
        // You may want to set user authentication state or redirect the user
        // For example, you can use localStorage or cookies to store user information

        // Example: store user information in localStorage
        localStorage.setItem("user", JSON.stringify(serverData.user));

        // Redirect or perform any other action
        // For example, you can use the 'useHistory' hook from 'react-router-dom' to redirect
        // import { useHistory } from 'react-router-dom';
        // const history = useHistory();
        // history.push('/dashboard');
      } else {
        // Handle server error or display an error message
        console.error("Server error:", serverResponse.statusText);
      }
    } else {
      // Handle Google login failure
      console.error("Google login failed");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


  useEffect(() => {
    // Load the Google API client
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.onload = () => {
      // Initialize the Google API client
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          clientId: clientId,
          scope: "email",
        });
      });
    };
    document.body.appendChild(script);
  }, [clientId]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div>
        <Toaster />
      </div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={signin} style={{height:'80px'}}></img>
          </div>
          <h2  style={{fontFamily: 'Playfair Display'}}className="text-center text-4xl font-bold leading-tight text-black">
            <HighlightText text={"Sign in to your Account"} />
          </h2>
          <p  className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
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
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="/forgot-password" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
              setPassword(e.target.value);
            }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  style={{background:'#084C98'}}
                  className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
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
                                console.log(json);
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
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
                 <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
