"use client";

import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-6 space-y-4">
                <h2 className="text-xl font-bold">Dashboard</h2>

                <nav className="flex flex-col gap-3">
                    <Link href="/dashboard">Overview</Link>
                    <Link href="/dashboard/profile">My Profile</Link>
                    <Link href="/dashboard/bookings">My Bookings</Link>
                    <Link href="/dashboard/reviews">My Reviews</Link>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 p-8">
                {children}
            </main>

        </div>
    );
}