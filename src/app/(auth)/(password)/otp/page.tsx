"use client";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function OtpVerification() {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add logic to handle OTP verification
    console.log("OTP Entered:", otp.join(""));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">OTP Verification</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter the 4-digit code sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex justify-center mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                value={data}
                onFocus={(e) => e.target.select()}
                className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>
          <Button variant={"outlined"} type="submit" className="w-full">
            Verify
          </Button>
          <div className="flex items-center justify-center cursor-pointer mt-2 ">
            <p className="w-full h-full flex items-center text-xs  ">
              If you didn’t receive a code!
              <span className="text-green-500 ml-1">Resend</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
