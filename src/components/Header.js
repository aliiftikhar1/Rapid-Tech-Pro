'use client'
import Link from "next/link";
// import { BsTelephone } from "react-icons/bs";

export default function Header() {
    return (
        <>
            <header className="bg-black/30 fixed z-50 w-full h-16 flex flex-col justify-center items-center">
                <nav className="flex space-x-3 justify-between items-center w-full px-12">
                    <div>

                        <Link href="/" className="">
                            <span className="text-4xl font-bold text-white">
                                Rapid <span className="text-bluish">TechPro.</span>
                            </span>
                        </Link>

                    </div>
                    <div className="flex space-x-12 text-2xl justify-center items-center font-bold text-white">
                        <Link href="/" className="">
                            Services
                        </Link>
                        <Link href="/" className="">
                            Solutions
                        </Link>
                        <Link href="/" className="">
                            Work
                        </Link>
                        <Link href="/" className="">
                            Company
                        </Link>
                        <Link href="/" className="">
                            Contact
                        </Link>

                    </div>
                    <div className=" flex space-x-3 justify-center items-center ">
                        <Link href="/" className="flex justify-center items-center text-xl gap-1 text-white">
                           
                            {/* <BsTelephone /> */}
                            +92 340 3051059
                        </Link>
                        <button className="w-28 h-8 rounded-full bg-white">
                            Get in touch
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}