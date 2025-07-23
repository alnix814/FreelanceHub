"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;
type LucideIconComponent = React.FC<LucideProps>;

interface MarqueeProps {
    className?: string;
    title: string;
    description: string;
    icon?: IconName;
}

export default function Marquee({
    className,
    title,
    description,
    icon = "Lock",
}: MarqueeProps) {

    const Icon = getLucideIcon(icon);

    return (
        <motion.div
            className="border w-80 rounded-xl px-8 py-14 flex flex-col gap-1 bg-[#1b1b1b]"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 1, scale: 1.03 }}
            transition={{ duration: 0.3, }}
        >
            <div className="w-min mb-2">
                <Icon width={40} height={40} />
            </div>
            <div className="w-full">
                <h1 className="font-medium text-xl">{title}</h1>
            </div>
            <div className="">
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </motion.div>
    );
}

function getLucideIcon(name: IconName): LucideIconComponent {
    const Icon = Icons[name];

    return Icon as LucideIconComponent;
}
