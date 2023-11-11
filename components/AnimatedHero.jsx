"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedHero = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2 }} className="rounded-full mx-auto bg-secondary w-[250px] h-[250px] sm:w-[325px] sm:h-[325px] relative shadow-md shadow-accent">
            <Image src='/assets/images/headshot2.png' alt="headshot of Ben Martinis" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={275} height={275} />
        </motion.div>
    )
}

export default AnimatedHero