import React, { useState } from "react";
import HighlightText from "../components/HighLightText";
import { toast, Toaster } from "react-hot-toast";
import { ArrowRight, Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import signin from '/signin.svg';
import axios from "axios";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSignIn = async () => {
    const loadingToast = toast.loading("Please Wait...");
    try {
      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });
      if (response.status === 200) {
        toast.success("Login successful");
        const token = response.data.token;
        localStorage.setItem('jsonwebtoken', token);
        setTimeout(() => {
          window.location.reload();
          window.location.href = '/';
        }, 1000);
      } else {
        throw new Error();
      }
    } catch (error) {
      const errorMessage = error.response.data.msg;
      toast.error(errorMessage || "Incorrect username or password");
    } finally {
      // Close the loading spinner toast when sign-in completes
      toast.dismiss(loadingToast);
    }
  };

  return (
    <section>
      <div className="flex h-screen items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24" id="signin">
        <div>
          <Toaster />
        </div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <img src={signin} style={{height:'80px'}} alt="Sign In" />
          </div>
          <h2 style={{fontFamily: 'Playfair Display'}} className="text-center text-4xl font-bold leading-tight text-black">
            <HighlightText text={"Sign in to your Account"} />
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a href="/signup" title="" className="font-semibold text-black transition-all duration-200 hover:underline">
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <div className="flex">
                    {/* Toggle password visibility */}
                    
                    <a href="/forgot-password" title="" className="text-sm font-semibold text-black hover:underline">
                      {' '}
                      Forgot password?{' '}
                    </a>
                  </div>
                </div>
                <div className="mt-2 flex border  rounded-md border-gray-300  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                  <input
                    className="flex h-full w-full bg-transparent px-3 py-2 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <button
                      type="button"
                      className="text-sm ml-4 font-semibold text-black hover:underline mr-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  style={{background:'#084C98'}}
                  className="inline-flex mb-4 w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={handleSignIn}
                >
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
