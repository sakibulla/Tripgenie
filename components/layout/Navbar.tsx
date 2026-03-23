"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="w-full border-b bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                {/* Logo */}
                <h1 className="text-xl font-bold">TripGenie</h1>

                {/* Nav Links */}
                <div className="flex gap-6 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/explore">Explore</Link>
                    {session && <Link href="/dashboard">Dashboard</Link>}
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>

                    {/* Auth Section */}
                    {session ? (
                        <div className="flex items-center gap-4">
                            <p className="text-sm">{session.user?.name}</p>

                            <button
                                onClick={() => signOut()}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="px-3 py-1 bg-blue-500 text-white rounded"
                        >
                            Login
                        </Link>
                    )}

                    <ThemeToggle />
                </div>

            </div>
        </nav>
    );
}