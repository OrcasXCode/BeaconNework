import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../src/assets/faviconbn (1).png";
import HighlightText from "../components/HighLightText";
import { toast, Toaster } from "react-hot-toast";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-full">
      <div>
        <Toaster />
      </div>
      <img src={favicon} className="h-16" alt="Favicon" />
      <div className="text-center h-5/6 w-4/5 mx-auto">
        <h1 className="text-3xl leading-9">
          <HighlightText text={"Sign in to your Account"} />
        </h1>
        <p className="font-playfair">
          Don't have an account?{" "}
          <span>
            <Link
              to="/signup"
              className="font-yourFontName font-bold text-black no-underline"
            >
              Create a free account
            </Link>
          </span>
        </p>

        <div className="mt-8">
          <p className="font-playfair font-bold text-xs" style={{marginLeft:'-328px',marginBottom:'-10px',fontSize:'12px'}}>Email Address<sup style={{color:'#EF476F'}}>*</sup></p>
          <input
            className="font-playfair m-2 p-2 w-4/5 border border-gray-500 rounded"
            type="text"
            placeholder="xyz@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="font-playfair font-bold text-xs" style={{marginLeft:'128px',marginBottom:'-10px',fontSize:'12px'}}>Password<sup style={{color:'#EF476F'}}>*</sup></p>
            <Link
              to="/forgot-password"
              className="mb-0 mr-24 no-underline text-black font-bold text-xs"
            >
              Forgot Password?
            </Link>
          </div>

          <input
            className="font-playfair m-2 p-2 w-4/5 border border-gray-500 rounded"
            type="password"
            placeholder=""
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <button
          className="font-playfair m-2 p-2 w-4/5 h-9 text-white bg-blue-500 rounded-md border-none mt-8"
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
                if (res.ok) {
                  const json = await res.json();
                  toast.success("Sign In successful");
                } else {
                  throw new Error("Sign In Failed");
                }
              })
              .catch((e) => {
                toast.error("Incorrect username or password");
              });
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
