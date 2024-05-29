"use client";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-lg font-semibold">New Password</h1>
          <p className="text-gray-600 text-center mb-6">
            Set the new password for your account so you can login and access
            all features.
          </p>
          <form className="flex flex-col mb-4 w-full max-w-sm gap-4">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Enter your password again"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <Button variant={"outlined"} type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
