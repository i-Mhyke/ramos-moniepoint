import { PiLightningFill } from "react-icons/pi"
import { AppContainer } from "../commons/AppContainer"
import { IoAnalyticsSharp } from "react-icons/io5"
import Image from "next/image"
import { FiBarChart2 } from "react-icons/fi"
import { FaPlay } from "react-icons/fa"
import { TextAnimate } from "../commons/Animations/TextAnimate"
import { Animate } from "../commons/Animations"


export const Hero = () => {
    return (
        <AppContainer className="max-lg:h-auto h-[90vh] lg:max-h-[720px] pt-20 max-lg:pb-14">
            <div className="mx-auto relative max-lg:flex max-lg:flex-col">
                <div className="float-right ml-5 relative">
                    <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-primary rounded-full absolute -top-3 -left-3 shadow-lg z-10">
                        <FaPlay size='1.1rem' className="fill-white" />
                    </div>
                    <Animate viewDelay={0} animation={{
                            hidden: {
                                scale: 0.2,
                            },
                            visible: {
                                scale: 1,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                }
                            },
                        }}>
                        <Image 
                            src="/images/hero-image.png" 
                            width={400} 
                            height={400} 
                            alt="hero" 
                            className=""
                            sizes="(min-width: 768px) 100vw, 500px"
                            />
                        </Animate>
                </div>
                <div className="relative">
                    <div className="max-lg:h-[3rem] h-[7rem] flex items-center mt-5 absolute top-0 max-lg:left-14 lg:left-36">
                        <Animate animation={{
                            hidden: {
                                scale: 0.2,
                                rotate: 180,
                            },
                            visible: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                }
                            },
                        }}>
                            <PiLightningFill className="text-primary max-lg:text-[3rem] text-[7rem] rounded-full max-lg:p-2 p-5 bg-[#f2f2f2]" />
                        </Animate>
                        <Animate animation={{
                            hidden: {
                                scale: 0.2,
                                rotate: 180,
                            },
                            visible: {
                                scale: 1,
                                rotate: 0,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                }
                            },
                        }}>
                            <IoAnalyticsSharp className="text-[#f2f2f2] max-lg:text-[3rem] text-[7rem] rounded-full max-lg:p-2 p-5 bg-primary -ml-4" />
                        </Animate>
                    </div>
                    <h1 className="max-[360px]:text-[2.3rem] max-lg:text-[2.5rem] text-[8rem] max-lg:leading-[1.2] leading-[1.1] font-medium mt-5 text-right overflow-y-hidden-hidden">
                        <TextAnimate text="Analytics" />
                        <br />
                        <TextAnimate text="that helps you" styleIndex={{
                            index: 1,
                            className: "text-[#d2d2d2]",
                        }} />
                        &nbsp;&nbsp;
                        <br />
                        <TextAnimate text="shape" />
                        <Animate className="inline-flex relative max-lg:bottom-1 -bottom-2" animation={{
                            hidden: {
                                scale: 0.1,
                            },
                            visible: {
                                scale: 1,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    type: "spring",
                                }
                            },
                        }}>
                            <FiBarChart2 className="text-dark max-lg:text-[2.5rem] text-[7rem] rounded-full max-lg:p-2 p-5 bg-secondary inline" />
                        </Animate>
                        &nbsp;
                        <TextAnimate text="the future" animationDelay={0.8} animation={{
                                hidden: {
                                    y: 200,
                                },
                                visible: {
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                    }
                                },
                            }} />
                    </h1>
                </div>
            </div>
        </AppContainer>
    )
}