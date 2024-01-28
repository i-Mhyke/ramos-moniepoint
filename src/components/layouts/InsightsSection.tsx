'use client'
import { HiOutlinePlusSm } from "react-icons/hi"
import { AppContainer } from "../commons/AppContainer"
import Image from "next/image"
import { Animate } from "../commons/Animations"
import { TextAnimate } from "../commons/Animations/TextAnimate"
import { useInView } from "react-intersection-observer"
import { use, useEffect, useState } from "react"

const insightsList = ["Instant Insights", "AI technology", "Easy integration"]

export const InsightsSection = () => {
    const [revealClass, setRevealClass] = useState("");
    const [slideUpClass, setSlideUpClass] = useState("");
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
   useEffect(() => {
        if (inView) {
            setRevealClass("reveal-ramos")
        }else{
            setRevealClass("")
        }
        
   }, [inView])
   useEffect(() => {
        if (inView2) {
            setSlideUpClass("slide-up")
        }else {
            setSlideUpClass("")
        }
    }, [inView2])
    return (
        <div className="bg-light rounded-t-[100px] rounded-b-[100px] pb-24 relative">
            <AppContainer className="py-32 lg:pr-0 z-10 relative">
                <div className="flex overflow-hidden">
                    <div className="flex flex-col w-[35%]">
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
                        <h3 className="font-medium text-5xl text-balance mb-20">Turning data into real actions and ideas</h3>
                        </Animate>
                        {
                            insightsList.map((insight, index) => (
                                <Animate key={insight} className="" once={false} animation={{
                                    hidden: {
                                        y: index === 0 ? 100 : 50,
                                    },
                                    visible: {
                                        y: 0,
                                        transition: {
                                            duration: index === 2 ? 0 : index === 1 ? 0.6 : 0.7,
                                            ease: "easeInOut",
                                            // delay: index === 2 ? 0 : 0.5,
                                        }
                                    },
                                }}> 
                                <div  className="bg-white rounded-3xl px-5 py-3 mt-5 flex justify-between items-center w-[80%] shadow-xl">
                                    <h4 className="text-xl">{insight}</h4>
                                    <div className="flex items-center justify-center w-14 h-14 bg-[#f2f2f2] rounded-full">
                                        <HiOutlinePlusSm size={20} className="text-dark" />
                                    </div>
                                </div>
                                </Animate>
                            ))
                        }
                    </div>
                    <div ref={ref2} className="w-[65%] flex relative justify-end h-[680px] -right-48">
                        <Image src="/images/dash-phone.png" alt="insights" width={300} height={700} className="relative -bottom-36 left-32 h-fit z-10" />
                        <Animate className="absolute -left-32 bottom-10 z-10" once={false} animation={{
                            hidden: {
                                y: 100,
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
                            <Image src="/images/animate-phone.png" alt="insights" width={215} height={350} className="h-fit z-20 " />
                        </Animate>
                        <Image  src="/images/dash-Tab.png" alt="insights" width={1000} height={600} className={`h-fit ${slideUpClass === "" ? "opacity-0" : slideUpClass}`} />
                    </div>
                </div>
            </AppContainer>
            <div style={{
                width: '100%',
                height: '40%',
                position: 'absolute',
                bottom: '0',
                left: '0',
                background: "url('/images/squares-fig.png') repeat center center/contain"
            }}>
                <AppContainer className="absolute -top-[7rem] left-1/2 -translate-x-1/2" ref={ref}>
                    <h1 className={`font-semibold text-[27rem] text-primary ${revealClass === "" ? "opacity-0" : revealClass}`}>
                        Ramos
                    </h1>
                    {/* <h1 className="font-semibold text-[27rem] text-primary">
                        <TextAnimate text="Ramos" animation={{
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    duration: 3,
                                    ease: "anticipate",
                                    type: 'spring',
                                    restSpeed: 0.2,
                                }
                            },
                        }} />
                    </h1> */}
                </AppContainer>
            </div>
        </div>
    )
}