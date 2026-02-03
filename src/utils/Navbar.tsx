"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NormalNavbar from "./Navbar/NormalNavbar";
import FloatingNavbar from "./Navbar/FloatingNavbar";



export default function Navbar() {


    return (
        <>
            <NormalNavbar />
            <FloatingNavbar />
        </>
    );
}
