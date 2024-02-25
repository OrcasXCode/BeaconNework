import { useState } from "react";
import HighlightText from "../components/HighLightText";
import { ArrowRight, Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import changepassword from '../src/assets/changepassword.png';
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export function ChangePassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showPassword,setShowPassword]=useState(false);
    const token = localStorage.getItem("cpToken");

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div>
                    <Toaster />
                </div>
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center">
                        <img src={changepassword} style={{ height: '60px' }} alt="Change Password" />
                    </div>
                    <h2 style={{ fontFamily: 'Playfair Display' }} className="text-center text-4xl font-bold leading-tight text-black">
                        <HighlightText text="Choose a new password" />
                    </h2>
                    <p className="text-center" style={{ margin: '15px', fontFamily: 'Playfair Display' }}>
                        Enter a new password that is both secure and easy to remember to prevent further security issues.
                    </p>
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    New password
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Enter New password"
                                        onChange={(e) => {
                                            setNewPassword(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Confirm password
                                </label>
                                <div className="mt-2 flex border  rounded-md border-gray-300  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                                    <input
                                        className="flex h-full w-full bg-transparent px-3 py-2 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type={showPassword ? "text" : "password"} 
                                        placeholder="Enter Confirm Password"
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
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
                                    style={{ background: '#084C98' }}
                                    className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    onClick={async () => {
                                        const loadingToast = toast.loading("Changing password...");
                                        try {
                                            const response = await axios.post("http://localhost:3000/user/change-password", {
                                                NewPassword: newPassword,
                                                ConfirmNewPassword: confirmNewPassword,
                                                token: `Bearer ${token}`
                                            }, {
                                                headers: {
                                                    "Content-type": "application/json",
                                                    "Authorization": `Bearer ${token}`
                                                }
                                            });
                                            if (response.status === 200) {
                                                toast.success("Password Changed");
                                                setTimeout(() => {
                                                    window.location.href = '/signin';
                                                }, 1500);
                                            } else {
                                                toast.error("Failed to update the password. Please try again.");
                                            }
                                        } catch (error) {
                                            const errorMessage = error.response.data.msg;
                                            toast.error(errorMessage || "Internal Server Error");
                                        } finally {
                                            toast.dismiss(loadingToast);
                                        }
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
    );
}
