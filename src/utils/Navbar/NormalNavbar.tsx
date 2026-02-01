import Link from "next/link";

export default function NormalNavbar() {
    return (
        <nav className="w-full px-10 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500" />
                <span className="text-lg font-semibold">Navbar</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/portfolio">Portfolio</Link>
            </div>

            <Link
                href="/signup"
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white"
            >
                Sign Up
            </Link>
        </nav>
    );
}
