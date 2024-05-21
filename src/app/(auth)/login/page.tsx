"use client";
import Button from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic here, such as an API call
    // For demonstration, we'll assume the login is successful
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="font-bold text-3xl text-center mb-6">Login</h1>
        <p className="text-center mb-6">
          Welcome back! Please login to your account.
        </p>
        <div className="flex justify-center mb-6">
          <svg width="75.104" height="56.584">
            <path
              d="M73.909.103a112.874 112.874 0 00-15.584 10.174c-4.5 3.5-8.849 7.657-10.559 13.268-1.157 3.8-1.365 11.442 4.2 11.692 5.27.236 7.42-6.094 7.484-10.374a18.8 18.8 0 00-5.02-12.7 20.134 20.134 0 00-13.144-6.262c-10.926-1.018-20.617 5.48-26.533 14.233-6.523 9.651-10.945 24.803-1.369 34.073.734.711 1.858-.41 1.123-1.123-7.8-7.548-5.334-19.484-.822-28.064 4.32-8.215 11.438-15.307 20.8-17.176 9.084-1.814 18.9 2.058 22.307 11.1 1.474 3.916 1.672 8.919-.813 12.5-1.445 2.08-4.875 3.372-6.449.665-1.254-2.158-1.015-5.19-.412-7.5 1.469-5.64 5.886-9.755 10.326-13.21a110.987 110.987 0 0115.266-9.93c.9-.487.1-1.858-.8-1.371z"
              fill="#37dbe2"
            ></path>
            <path
              d="M18.567 41.929a40.9 40.9 0 00-5.392 13.65l1.327-.35A32.43 32.43 0 00.961 45.76c-.959-.355-1.373 1.178-.422 1.531a30.854 30.854 0 0112.84 9.06.8.8 0 001.327-.35 39.635 39.635 0 015.232-13.271c.541-.87-.832-1.668-1.371-.8z"
              fill="#37dbe2"
            ></path>
          </svg>
        </div>
        <figure className="mb-6">
          <Image
            src="/path/to/your/image.jpg"
            alt="Login Image"
            width={100}
            height={100}
            className="rounded-full"
          />
        </figure>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-4 py-2 w-full"
          />
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg w-full"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
