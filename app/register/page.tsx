"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            alert("User created!");
            router.push("/login");
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="border p-8 rounded-xl w-80 space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">
                    Register
                </h2>

                <input
                    placeholder="Name"
                    className="w-full border p-2"
                    onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                    }
                />

                <input
                    placeholder="Email"
                    className="w-full border p-2"
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2"
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
}