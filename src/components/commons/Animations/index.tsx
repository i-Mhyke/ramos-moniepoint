'use client'
import { TargetAndTransition, Variant, VariantLabels, Variants, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimateProps {
    className?: string;
    once?: boolean;
    duration?: number;
    animation?: Variants;
    exitControls?: TargetAndTransition | VariantLabels;
    animationDelay?: number;
    children: React.ReactNode;
    viewDelay?: number;
    innerClassName?: string;
    initial?: VariantLabels;
    animateStart?: VariantLabels;
    variants?: Variants;
}
const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        }
    },
}

export const Animate = ({ 
    className,
    once = true,
    duration,
    animation = defaultAnimations,
    animationDelay,
    children,
    viewDelay = 0.5,
    innerClassName,
    exitControls,
    initial = "hidden",
    animateStart = "visible",
    variants = {
        visible: { transition: { staggerChildren: 0.1  } },
        hidden: {},
    }
}: AnimateProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: viewDelay, once: true});

    useEffect(() => {
        if (isInView) {
            controls.start(animateStart);
        }else {
            controls.start(initial);
        }
    }, [isInView])
    return (
        <>
            <motion.div
                ref={ref}
                initial={initial}
                animate={controls}
                variants={variants}
                className={className}
            >
                <motion.div
                    variants={animation}
                    transition={{ duration }}
                    className={innerClassName}
                    // className={className}
                >
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}