'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function HeroSection() {
    const [isMouseInside, setIsMouseInside] = useState(false);
    const attractAreaRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(x, [-250, 0, 250], [1, 1.1, 1]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Only track mouse movements on screens larger than 768px (desktop)
            if (window.innerWidth >= 768 && attractAreaRef.current) {
                const areaRect = attractAreaRef.current.getBoundingClientRect();
                const areaCenter = {
                    x: areaRect.left + areaRect.width / 2,
                    y: areaRect.top + areaRect.height / 2,
                };

                const distanceX = event.clientX - areaCenter.x;
                const distanceY = event.clientY - areaCenter.y;
                const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

                const maxDistance = areaRect.width;
                const isWithinArea = distance <= maxDistance;

                if (isWithinArea) {
                    setIsMouseInside(true);
                    const attractionFactor = 1 - Math.pow(Math.min(distance / maxDistance, 1), 2);
                    x.set(distanceX * attractionFactor * 0.6);
                    y.set(distanceY * attractionFactor * 0.6);
                } else {
                    setIsMouseInside(false);
                    x.set(0);
                    y.set(0);
                }
            } else {
                // Reset position for mobile or when outside tracking area
                x.set(0);
                y.set(0);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <div className="md:h-screen h-[80vh] bg-[url('/images/herosection.png')] bg-cover w-full overflow-hidden relative">
            {/* Main Content */}
            <div className="flex flex-col justify-center items-center h-full mx-auto w-full px-4 md:px-0">
                <h1 className="max-w-2xl mx-auto text-4xl md:text-7xl font-bold text-white">
                    We are a <span className="text-bluish">Software Development</span>
                    <br />
                    company.
                </h1>
                <h2 className="max-w-2xl mx-auto text-lg md:text-2xl tracking-wide text-white mt-4">
                    We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
                </h2>
                <div className="md:hidden flex justify-start mt-8 w-full">
                <button className="bg-bluish text-white px-6 py-3 rounded-full text-sm font-medium">
                    Let's Discuss
                </button>
            </div>

            </div>

            {/* "Let's Discuss" Button - Only visible on mobile */}
           
            {/* Clients We've Served */}
            <div className="absolute bottom-4 left-4 md:left-12 gap-2 flex justify-center items-center text-sm md:text-xl text-white">
                <div className="h-2 w-2 md:h-4 md:w-4 rounded-full bg-bluish"></div>
                Clients We've Served
            </div>

            {/* Attract Area for Desktop Only */}
            <div
                ref={attractAreaRef}
                className="hidden md:flex absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full items-center justify-center"
            >
                <a href="/" className="pointer-events-auto">
                    <motion.div
                        className="h-32 w-32 md:h-44 md:w-44 bg-bluish p-6 flex flex-col justify-center items-center md:text-xl text-white rounded-full"
                        style={{
                            x: x,
                            y: y,
                            scale: scale,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        whileHover={{
                            backgroundColor: "#ffffff",
                            color: "#000000",
                        }}
                    >
                        <FaArrowRight className="transform -rotate-45 mb-2" />
                        Let's Discuss Your Idea
                    </motion.div>
                </a>
            </div>
        </div>
    );
}
