import { PiLightningFill } from "react-icons/pi"
import { AppContainer } from "../commons/AppContainer"
import { IoAnalyticsSharp } from "react-icons/io5"
import { RiPulseLine } from "react-icons/ri"
import { Button } from "../ui/Buttons"
import { TextAnimate } from "../commons/Animations/TextAnimate"
import { Animate } from "../commons/Animations"


export const EfficiencySection = () => {
    return (
        <AppContainer className="py-32">
            <div>
                <h1 className="max-lg:text-[2.3rem] text-[8rem] leading-[1.1] font-medium mt-5 text-left">
                    <TextAnimate text="Maximize efficiency" styleIndex={{
                            index: 1,
                            className: "text-[#d2d2d2]",
                        }} />
                    <TextAnimate text="with our intuitive" />
                </h1>
                <div className="flex max-lg:flex-col-reverse justify-between mt-5">
                    <div className="flex max-lg:justify-center items-center max-lg:mt-10">
                        <Animate className="" once={false} animation={{
                                    hidden: {
                                        scale: 0
                                    },
                                    visible: {
                                        scale: 1, 
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }
                                    },
                                }}> 
                            <div className="flex justify-center items-center relative max-lg:w-40 max-lg:h-40 w-48 h-48 bg-[#f2f2f2] rounded-full -mr-5">
                                <RiPulseLine size="3rem" className="fill-white bg-primary rounded-xl p-2 relative z-10" />
                                <div className="absolute w-[70%] h-[1px] border-t-2 border-dotted border-primary/70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </Animate>
                        <Animate className="" once={false} animation={{
                                hidden: {
                                    scale: 0.5
                                },
                                visible: {
                                    scale: 1, 
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }
                                },
                            }}> 
                            <div className="flex flex-col justify-center items-center relative max-lg:w-40 max-lg:h-40 w-48 h-48 bg-secondary rounded-full ">
                                <h4 className="text-3xl font-semibold">+30%</h4>
                                <p className="w-[60%] text-center text-sm">Speed up your productivity</p>
                            </div>
                        </Animate>
                    </div>
                    <Animate className="" once={false} animation={{
                                hidden: {
                                    scale: 0.2,
                                },
                                visible: {
                                    scale: 1, 
                                    transition: {
                                        duration: 1,
                                        ease: "easeOut",
                                        type: "spring",
                                    }
                                },
                            }}> 
                        <div className="max-lg:w-full w-[500px] overflow-hidden max-lg:rounded-3xl rounded-[5rem] py-1 bg-secondary h-fit">
                            <h1 className="max-lg:text-[2.3rem] text-[8rem] font-medium max-lg:ml-5 text-left text-nowrap lg:text-marquee">
                                analytics service
                            </h1>
                        </div>
                    </Animate>
                </div>
                <div className="flex max-lg:flex-col justify-between max-lg:py-10 py-16 mt-20 border-t">
                    <Animate className="overflow-hidden py-2" once={false} animation={{
                                hidden: {
                                    y: 100,
                                    opacity: 0,
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }
                                },
                            }}> 
                        <p className="max-lg:text-base text-lg max-w-2xl">
                            Explore traffic sources, page behaviour, conversions and more 
                            to gain deep insight into your audience. With us, your business 
                            doesn&apos;t just adapt - it evolves
                        </p>
                    </Animate>
                    <Animate className="" once={false} animation={{
                                hidden: {
                                    scale: 0.3,
                                },
                                visible: {
                                    scale: 1, 
                                    transition: {
                                        duration: 1,
                                        ease: "easeOut",
                                        type: "spring",
                                    }
                                },
                            }}> 
                        <div className="flex max-lg:flex-col gap-4 max-lg:mt-5">
                            <Button variant="light" className="min-w-[200px]">Request a demo</Button>
                            <Button variant="primary" className="min-w-[200px]" >Start for free</Button>
                        </div>
                    </Animate>
                </div>
            </div>
        </AppContainer>
    )
}