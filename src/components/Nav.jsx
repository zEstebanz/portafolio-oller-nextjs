"use client"
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./Navbarlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image"; // Importar Image de Next.js

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
    {
        title: "Blog",
        path: "https://diario-mk.vercel.app/",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 nav">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <div className="flex items-center">
                    {/* Avatar */}
                    {/* <div className="mr-3">
                        <Image src="/img/yo.jpg" alt="Avatar" className="rounded-full" width={40} height={40} />
                    </div> */}
                    {/* Nombre del sitio */}
                    <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold">
                        <h1 className="text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                <span className="text-white"><span className="span">E</span>steban;</span>
                            </span>
                        </h1>
                    </Link>
                </div>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
