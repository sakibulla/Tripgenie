import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                <h1 className="text-xl font-bold">TripGenie</h1>

                <div className="flex gap-6 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/explore">Explore</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <ThemeToggle />
                </div>

            </div>
        </nav>
    );
}