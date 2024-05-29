"use client";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send verification code)
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email to receive a verification code.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Button variant={"outlined"} type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
