import { useState } from "react";
import HighlightText from "../components/HighLightText";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from 'lucide-react';
import changepassword from '../src/assets/changepassword.png';

export function ChangePassword() {
    const [NewPassword, SetNewPassword] = useState("");
    const [ConfirmNewPassword, SetConfirmNewPassword] = useState("");

    return (
        <section>
            <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div>
                    <Toaster/>
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
                                        placeholder="Enter your new password"
                                        onChange={(e) => {
                                            SetNewPassword(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    Confirm new password
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-#084C98 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Confirm new password"
                                        onChange={(e) => {
                                            SetConfirmNewPassword(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    style={{ background: '#084C98' }}
                                    className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    onClick={async () => {
                                        try {
                                            const response = await fetch("http://localhost:3000/user/change-password", {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    NewPassword: NewPassword,
                                                    ConfirmNewPassword: ConfirmNewPassword
                                                }),
                                                headers: {
                                                    "Content-type": "application/json",
                                                    "Authorization": `Bearer ${localStorage.getItem("cptkn")}`
                                                }
                                            });
                                            if (response.ok) {
                                                const data = await response.json();
                                                toast.success("Password Changed");
                                                setTimeout(() => {
                                                    window.location.href = '/signin';
                                                }, 1500);
                                            } else {
                                                const errorMessage = await response.json();
                                                toast.error(errorMessage.msg || "Failed to update the password. Please try again.");
                                            }
                                        } catch (error) {
                                            console.error("Failed to update the password:", error);
                                            toast.error("Failed to update the password. Please try again.");
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
