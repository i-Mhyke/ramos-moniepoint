
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react";

interface CounterAnimationProps {
    className?: string;
    value: number;
    duration?: number;
    delay?: number;
    once?: boolean;
    viewDelay?: number;
}

export const CounterAnimation = ({
    className,
    value,
    duration = 1,
    delay = 0,
    once = false,
    viewDelay = 1,
}: CounterAnimationProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, {amount: viewDelay, once: true});
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, {
        stiffness: 100,
        damping: 30,
        duration: duration,

    });
    
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }else {
            motionValue.set(0);
        }
    }, [isInView, motionValue])
    useEffect(() => 
        spring.on("change", (springValue) => {
            if (ref.current) {
                ref.current.textContent = springValue.toFixed(0);
            }
        })
    )
    return (
        <span ref={ref} className={className} />
    )
}