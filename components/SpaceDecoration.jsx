"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SpaceDecoration = ({ imgURL }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const decorationVariants = {
        initial: { x: -700, opacity: 0 },
        animate: { x: 0, opacity: 1 }
    }

    return (
        <motion.div className="my-[20vh] lg:my-[50vh] overflow-hidden" ref={ref} variants={decorationVariants} initial='initial' animate={isInView ? 'animate' : 'initial'} transition={{ duration: 2 }}>
            <Image src={imgURL} alt="space object" className="w-full sm:w-[75%] lg:w-[50%] mx-auto h-auto" width={0} height={0} sizes="100%" />
        </motion.div>
    )
}

export default SpaceDecoration