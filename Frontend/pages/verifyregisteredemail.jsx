import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HighlightText from "../components/HighLightText";
import { ArrowRight } from 'lucide-react';
import { toast, Toaster } from "react-hot-toast";

export function Verifyregisteredemail(props) {
    const [otp, setOtp] = useState("");
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const email = searchParams.get('email');
        setEmail(email);
    }, [location]);

    const [email, setEmail] = useState("");

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/user/verifyemail`, {
                method: "POST",
                body: JSON.stringify({
                    otp: otp,
                    email: email,
                }),
                headers: {
                    "Content-type": "application/json",
                    "email": email
                }
            });
            if (response.ok) {
                const data = await response.json();
                toast.success("OTP Verified");
                setTimeout(() => {
                    window.location.href = '/signup';
                }, 1000);
            } else {
                console.error("Failed to verify OTP:", response.msg);
                toast.error("Invalid OTP");
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            toast.error("Error verifying OTP");
        }
    };

    return (
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div>
                <Toaster />
            </div>
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h1 style={{ fontFamily: 'Playfair Display' }} className="text-center text-4xl font-bold leading-tight text-black"><HighlightText text="Check Email" /></h1>
                <p className="text-center " style={{ margin: '15px', fontFamily: 'Playfair Display' }}>{`We have sent the OTP to your email, please do not share it with anyone else as it may lead to security issues`}</p>
                <form>
                    <label>
                        <div style={{ marginTop: '50px' }}>
                            <label htmlFor="" className="text-base font-medium text-gray-900">
                                {' '}
                                OTP{' '}
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    placeholder="OTP"
                                    onChange={(e) => {
                                        setOtp(e.target.value);
                                    }}
                                ></input>
                            </div>
                        </div>
                    </label>

                    <button
                        style={{ background: '#084C98' }}
                        className="inline-flex mt-7 w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        onClick={handleVerifyOTP}
                    >
                        Verify OTP<ArrowRight className="ml-2" size={16} />
                    </button>
                </form>
            </div>
        </div>
    )
}
