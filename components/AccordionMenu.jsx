"use client"

import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

const AccordionMenu = ({ imageHref, title, info }) => {
    const [isShowing, setIsShowing] = useState(false);

    const ChangeIsShowing = () => setIsShowing((state) => !state);
    return (
        <div className="w-full p-2 md:p-4 border border-dotted rounded-lg border-accent">
            <div className={`flex justify-between items-center gap-x-6 ${isShowing ? 'border-b border-dotted border-primary' : null}`} onClick={ChangeIsShowing}>
                <Image src={imageHref} alt="planet" className="w-[50px] h-[50px] mb-1 md:w-[100px] md:h-[100px]" width={100} height={100} quality={100} />
                <h5 className="text-text font-semibold text-sm md:text-xl flex items-center gap-x-2">
                    {title}{isShowing ? <ChevronUp width={30} height={30} /> : <ChevronDown width={30} height={30} />}
                </h5>
            </div>
            {isShowing ? (
                <div className="m-2 text-text text-sm md:text-base lg:text-lg">
                    {info}
                </div>
            ) : null}
        </div>
    )
}

export default AccordionMenu