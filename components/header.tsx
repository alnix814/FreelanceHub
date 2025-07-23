'use client'

import Image from "next/image";
import { AuthButton } from "./auth-button";
import { motion } from "motion/react"
import { useEffect, useState } from "react";

export default function Header() {
    const [show, setShow] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setScrollY(currentScrollY);
            setShow(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY])


    return (
        <header className={`w-full px-44 pt-8 fixed z-20 ${scrollY > 0 ? 'backdrop-blur-sm ' : ''}`}>
            <div className="flex justify-between">
                <motion.div
                    initial={ scrollY > 0 ? { opacity: 0, x: 0 } : { opacity: 0, x: -100 }}
                    animate={ scrollY > 0 ? { opacity: 1, y: -17 } : { opacity: 1, x: 0 }}
                    transition={ scrollY > 0 || show ? { duration: 0.3, delay: 0 } : { duration: 0.6, delay: 0.3 }}
                    className="max-w-min flex items-center gap-3"
                >
                    <Image src={'/logo-.svg'} alt="" width={35} height={35} className="pointer-events-none" />
                    <label className="font-extrabold font-sans text-xl">FreelanceHub</label>
                </motion.div>
                <motion.div
                    initial={ scrollY > 0 ? { opacity: 0, x: 0 } : { opacity: 0, x: 100 }}
                    animate={ scrollY > 0 ? { opacity: 1, y: -17 } : { opacity: 1, x: 0 }}
                    transition={ scrollY > 0 || show ? { duration: 0.3, delay: 0 } : { duration: 0.6, delay: 0.3 }}
                    className="flex gap-3"
                >
                    <AuthButton />
                </motion.div>
            </div>
        </header>
    )
}