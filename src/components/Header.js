'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Track scroll beyond 100px
    const [isVisible, setIsVisible] = useState(true); // Track header visibility
    const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Show header on scroll up, hide on scroll down
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
        setLastScrollY(currentScrollY);

        // Apply background and text color change after 100px
        setIsScrolled(currentScrollY > 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Header */}
            <header
                className={`fixed z-50 w-full h-16 flex items-center justify-between px-4 sm:px-12 transition-transform duration-300 ${
                    isVisible ? "translate-y-0" : "-translate-y-16" // Slide out when hidden
                } ${isScrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}`}
            >
                {/* Logo */}
                <Link href="/" className="text-2xl sm:text-4xl font-bold">
                    Rapid <span className={isScrolled ? "text-blue-500" : "text-bluish"}>TechPro.</span>
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex space-x-12 text-lg">
                    <Link href="/">Services</Link>
                    <Link href="/">Solutions</Link>
                    <Link href="/">Work</Link>
                    <Link href="/">Company</Link>
                    <Link href="/">Contact</Link>
                </nav>

                {/* Contact & Button - Desktop Only */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/" className="flex items-center gap-1 text-lg">
                        <BsTelephone />
                        +92 340 3051059
                    </Link>
                    <button className={`w-28 h-8 rounded-full font-medium ${
                        isScrolled ? "bg-black text-white" : "bg-white text-black"
                    }`}>
                        Get in touch
                    </button>
                </div>

                {/* Toggle Button - Mobile Only */}
                <button
                    className="md:hidden text-2xl"
                    onClick={toggleSidebar}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </header>

            {/* Sidebar - Mobile Only */}
            <aside
                className={`fixed top-0 right-0 w-64 h-full bg-black/90 text-white transform ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex flex-col items-start p-6 space-y-6">
                    {/* Logo in Sidebar */}
                    <Link href="/" className="text-3xl font-bold mb-6">
                        Rapid <span className="text-bluish">TechPro.</span>
                    </Link>

                    {/* Navigation Links */}
                    <Link href="/" onClick={toggleSidebar} className="text-lg">
                        Services
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-lg">
                        Solutions
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-lg">
                        Work
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-lg">
                        Company
                    </Link>
                    <Link href="/" onClick={toggleSidebar} className="text-lg">
                        Contact
                    </Link>

                    {/* Contact Info & Button */}
                    <div className="flex flex-col items-start space-y-3 mt-6">
                        <Link href="/" className="flex items-center gap-2 text-lg">
                            <BsTelephone />
                            +92 340 3051059
                        </Link>
                        <button className="w-full h-10 rounded-full bg-white text-black font-medium">
                            Get in touch
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay - Close Sidebar when clicking outside */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}
