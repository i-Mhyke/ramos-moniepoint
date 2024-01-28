'use client'
import { Variant, useAnimation, motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface TextAnimateProps {
    text: string;
    className?: string;
    once?: boolean;
    duration?: number;
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
    animationDelay?: number;
    viewDelay?: number;
    styleIndex?: {
        className: string;
        index: number;
    }
}
const defaultAnimations = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeIn",
            type: 'spring', 
            restSpeed: 0.2,
            mass: 5,
            damping: 40,
            velocity: 5
        }
    },
}

export const TextAnimate = ({ 
    text, 
    className,
    once,
    duration,
    animation = defaultAnimations,
    viewDelay = 0,
    animationDelay,
    styleIndex
}: TextAnimateProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: viewDelay, once: true});
    const textArray = Array.isArray(text) ? text : [text];

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }else {
            controls.start("hidden");
        }
    }, [isInView])

    return (
        <>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1,  } },
                    hidden: {},

                  }}
                aria-hidden
                className={className}
                style={{
                    display: "inline-block",
                    overflowY: "hidden",
                    marginBottom: "-0.15em",
                }}
                > 
                {textArray.map((line, lineIndex) => (
                    <span className="" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word: string, wordIndex: any) => (
                        <span 
                        className={`inline-block ${styleIndex?.index === wordIndex ? styleIndex?.className : ""}`} 
                        key={`${word}-${wordIndex}`} >
                            {word.split("").map((char, charIndex) => (
                            <motion.span
                                key={`${char}-${charIndex}`}
                                className="inline-block"
                                variants={animation}
                            >
                                {char}
                            </motion.span>
                            ))}
                            &nbsp;
                        </span>
                        ))}
                    </span>
                ))}
            </motion.span>

        </>
    )
}

export const WordAnimate = ({
    text,
    className,
    once,
    duration,
    animation = defaultAnimations,
    viewDelay = 0,
    animationDelay,
    styleIndex
}: TextAnimateProps) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: viewDelay, once: true});
    const textArray = Array.isArray(text) ? text : [text];

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }else {
            controls.start("hidden");
        }
    }, [isInView])

    return (
        <>
            <motion.span
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { transition: { staggerChildren: 0.1  } },
                    hidden: {},

                  }}
                aria-hidden
                className={className}
                style={{
                    display: "inline-block",
                    overflowY: "hidden",
                    marginBottom: "-0.15em",
                }}
                > 
                {textArray.map((line, lineIndex) => (
                    <span className="" key={`${line}-${lineIndex}`}>
                        {line.split(" ").map((word: string, wordIndex: any) => (
                        <motion.span 
                        className={`inline-block ${styleIndex?.index === wordIndex ? styleIndex?.className : ""}`} 
                        key={`${word}-${wordIndex}`} 
                        // variants={animation}
                        >
                            {word.split("").map((char, charIndex) => (
                            <motion.span
                                key={`${char}-${charIndex}`}
                                className="inline-block"
                                variants={animation}
                            >
                                {char}
                            </motion.span>
                            ))}
                            &nbsp;
                        </motion.span>
                        ))}
                    </span>
                ))}
            </motion.span>

        </>
    )
}