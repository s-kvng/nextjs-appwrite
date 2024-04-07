"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import React, { useState} from "react";
import Logo from "./Logo";

const menuItems = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "#",
    },
    {
        name: "Contact",
        href: "#",
    },
];

export default function Header() {

    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const { authStatus } = useAuth();
    return (
        <div className="relative w-full bg-white py-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <Link href={"/"} className="inline-block w-full max-w-[150px]">
                        <Logo />
                    </Link>
                </div>
                <div className="hidden grow items-start lg:flex">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden space-x-2 lg:block">
                    <Link
                        href={authStatus ? "/profile" : "/signup"}
                        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {authStatus ? "Profile" : "Sign up"}
                    </Link>
                    <Link
                        href={authStatus ? "/logout" : "/login"}
                        className="rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {authStatus ? "Logout" : "Log In"}
                    </Link>
                </div>

                {/* Mobile view */}
            <div className="-mr-2 flex lg:hidden">
                <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen} // Update aria-expanded based on isOpen state
                    onClick={toggleMenu}
                >
                    Menu
                </button>
                <div
                    className={` z-10 ml-3 space-y-1 sm:ml-6 absolute top-0 right-0 bg-white shadow-xl overflow-hidden h-screen w-full transition transform duration-300 ease-in-out ${
                    isOpen ? '' : 'translate-x-full' // Slide menu in from right
                    }`}
                    id="mobile-menu"
                    aria-hidden={!isOpen} // Update aria-hidden based on isOpen state
                >
                    {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                        onClick={toggleMenu} // Close menu on item click (optional)
                    >
                        {item.name}
                    </Link>
                    ))}

                <div className="lg:hidden space-x-2 flex flex-col">
                    <Link
                        onClick={toggleMenu}
                        href={authStatus ? "/profile" : "/signup"}
                        className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {authStatus ? "Profile" : "Sign up"}
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        href={authStatus ? "/logout" : "/login"}
                        className=" w-1/5 flex justify-center items-center rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {authStatus ? "Logout" : "Log In"}
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}