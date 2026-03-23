"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/",
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border p-8 rounded-xl w-80 space-y-4">

                <h2 className="text-2xl font-bold text-center">
                    Login
                </h2>

                <input
                    placeholder="Email"
                    className="w-full border p-2"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 rounded"
                >
                    Login
                </button>

                <button
                    onClick={() => signIn("google")}
                    className="w-full bg-red-500 text-white py-2 rounded"
                >
                    Google Login
                </button>

                <Link
                    href="/register"
                    className="w-full bg-gray-600 text-white py-2 rounded text-center block"
                >
                    Register
                </Link>

            </div>
        </div>
    );
}