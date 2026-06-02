import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";

interface AnimatedNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
    value: number;
    duration?: number
    initial?: number
}


export default function AnimatedNumber({ value, duration = 2, initial = 0 }: AnimatedNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const count = useMotionValue(initial);
    const rounded = useTransform(count, (latest) =>
        Math.round(latest)
    );

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, value, {
            duration,
            ease: "easeOut",
        });

        return () => controls.stop();
    }, [isInView, value]);

    return (
        <motion.span ref={ref} >
            {rounded}
        </motion.span>
    );
}
