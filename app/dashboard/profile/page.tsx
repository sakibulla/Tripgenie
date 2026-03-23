"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
    const { data: session } = useSession();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Profile</h1>

            <div className="border p-6 rounded-xl space-y-3">
                <p>Name: {session?.user?.name}</p>
                <p>Email: {session?.user?.email}</p>
            </div>
        </div>
    );
}