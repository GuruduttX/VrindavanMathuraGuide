"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Packages", href: "/packages" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },

];

export default function FloatingNavbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-6 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 transition-all duration-500
      ${show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
    >
      <nav className="flex items-center justify-between rounded-full bg-white px-6 py-3 backdrop-blur-xl shadow-xl border border-white/40">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Admin/Experience_my_India.webp"
            width={140}
            height={30}
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={active ? "text-blue-600" : "text-gray-700"}
                >
                  {item.name}
                </Link>
                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-500 rounded-full" />
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/signup"
          className="rounded-full bg-gradient-to-r from-orange-400 to-orange-400 px-5 py-2 text-sm font-semibold text-white shadow-md hover:scale-105 transition"
        >
          Enquire Now
          
        </Link>
      </nav>
    </div>
  );
}
