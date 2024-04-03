import React from "react";
import google from "/google.svg"

function SignInWithGoogle() {
  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
      >
      <span className="mr-2 inline-block">
        <img src={google} className='h-[35px] mr-5'></img>
      </span>   
      Sign In With Google
      </button>
    </div>
  );
}

export default SignInWithGoogle;
