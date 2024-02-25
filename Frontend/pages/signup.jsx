import { useState } from "react";
import HighlightText from "../components/HighLightText";
import { Toaster, toast } from "react-hot-toast";
import { ArrowRight, Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import signup from '../src/assets/signup.png';
import axios from 'axios';

export function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleSignup = () => {
        const loadingToast = toast.loading("Signing up...");
        axios.post("http://localhost:3000/user/signup", {
            name,
            email,
            password,
        })
        .then((res) => {
            if (res.status === 200) {
                toast.success("Sign Up successful");
                setTimeout(() => {
                    window.location.href = '/signin';
                }, 2000);
            } else {
                throw new Error("Sign Up Failed");
            }
        })
        .catch((error) => {
            const errorMessage = error.response?.data?.msg || "Internal Server Error";
            toast.error(errorMessage);
        })
        .finally(() => {
            // Close the loading spinner toast when sign-up completes
            toast.dismiss(loadingToast);
        });
    };

    return (
        <section className="w-full h-screen">
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div><Toaster></Toaster></div>
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center">
                        <img src={signup} style={{ height: '65px' }} alt="Sign Up" />
                    </div>
                    <h2 style={{ fontFamily: 'Playfair Display' }} className="text-center text-4xl font-bold leading-tight text-black">
                        <HighlightText text={"Sign up to create Account"} />
                    </h2>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Already have an account?{' '}
                        <a href="/signin" title="" className="font-medium text-black transition-all duration-200 hover:underline">
                            Sign In
                        </a>
                    </p>
                    <p className="mt-2 text-center text-base text-gray-600">
                        Register your email before creating an account!{' '}
                        <a href="/registeremail" title="" className="font-medium text-black transition-all duration-200 hover:underline">
                            Register Email
                        </a>
                    </p>
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Full Name{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <button
                                        type="button"
                                        className="text-sm font-semibold text-black hover:underline"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                    style={{ background: '#084C98' }}
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    onClick={handleSignup}
                                >
                                    Create Account <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
