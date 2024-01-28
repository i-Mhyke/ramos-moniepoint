'use client'
import { HiOutlineSquare3Stack3D } from "react-icons/hi2"
import { AppContainer } from "../commons/AppContainer"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer";
import { ProgressBar } from "../commons/ProgressBar";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Image from "next/image";
import { CounterAnimation } from "../commons/Animations/Counter";
import { Animate } from "../commons/Animations";


export const MetricsSection = () => {
    const [progress, setProgress] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        delay: 500
    })
   useEffect(() => {
        if (inView) {
            setProgress(50)
        }else{
            setProgress(0)
        }
   }, [inView])
    return (
        <div className="bg-light rounded-t-[100px] rounded-b-[100px]">
            <AppContainer className="py-20">
                <div className="flex justify-between items-center">
                    <div className="w-[70%]">
                        <Animate className="overflow-hidden py-2" animation={{
                            hidden: {
                                y: 100,
                            },
                            visible: {
                                y: 0,
                                transition: {
                                    type: "spring",
                                    duration: 1,
                                    ease: "easeInOut",
                                }
                            },
                        }}>                            
                            <h3 className="text-6xl font-medium text-balance">
                                Your key to strategic success through analytics
                            </h3>
                        </Animate>
                    </div>
                    <div className="w-[30%] flex justify-end">
                        <Animate className="overflow-hidden py-2" animation={{
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
                            <p className="text-balance text-2xl">Ready for exciting, instantaneous, all-accessible insights in real time?</p>
                        </Animate>
                    </div>
                </div>
                <div className="flex justify-between gap-5" ref={ref} >
                    <div className="w-[60%] rounded-2xl bg-white border border-gray-200 mt-10 flex shadow-2xl">
                        <div className="p-12 w-6/12 flex flex-col">
                            <Animate className="" animation={{
                                hidden: {
                                    scale: 0.5
                                },
                                visible: {
                                    scale: 1, 
                                    transition: {
                                        duration: 0.3,
                                        ease: "linear",
                                    }
                                },
                            }}> 
                                <div className="bg-secondary w-fit shadow-xl text-dark p-2 rounded-lg">
                                    Setting up reports
                                </div>
                            </Animate>
                            <div className="flex-1 flex flex-col justify-end">
                                <h4 className="text-3xl font-medium">Fast and easy access to analytics</h4>
                                <Animate className="" viewDelay={0.5} animation={{
                                    hidden: {
                                        opacity: 0.1,
                                        y: 10,
                                    },
                                    visible: {

                                        opacity: 1, 
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            duration: 1,
                                            ease: "linear",
                                        }
                                    },
                                }}> 
                                    <p className="text-xl mt-5 text-gray-500 font-light">One platform is a comprehensive system of solutions that will be the first step towards digitization of your business!</p>
                                </Animate>
                            </div>
                        </div>
                        <div className="p-5 mt-10 border-t border-l rounded-tl-2xl border-gray-200 w-6/12">
                            <h5 className="text-xl font-medium">Sales Statistics</h5>
                            <Animate className="" viewDelay={0.5} animation={{
                                hidden: {
                                    opacity: 0.1,
                                    y: 20,
                                },
                                visible: {

                                    opacity: 1, 
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "linear",
                                    }
                                },
                            }}> 
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="flex items-center gap-5 w-[60%]">
                                        <div className="flex items-center justify-center bg-primary rounded-full w-14 h-14">
                                            <HiOutlineSquare3Stack3D size="1.2rem" className="text-white" />
                                        </div>

                                        <div>
                                            <h6 className="text-gray-500 font-medium text-base">Total profit</h6>
                                            <h3 className="text-3xl font-medium text-balance mt-1">
                                                <span className="text-lg font-normal">$</span> 264,2K
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="bg-light rounded-2xl p-3 w-[40%]">
                                        <h6 className="font-medium text-base">Visitors</h6>
                                        <ProgressBar progress={progress} className="mt-2" />
                                        <h4 className="text-[2rem] font-base mt-2"><CounterAnimation value={56} />k
                                            <sup className="text-success text-xs align-super">
                                                <BsFillArrowUpCircleFill size="1rem" className="inline mr-1" />
                                                +12%
                                            </sup>
                                        </h4>
                                    </div>
                                </div>
                            </Animate>
                            <Animate className="" viewDelay={0.5} animation={{
                                hidden: {
                                    opacity: 0.1,
                                    y: 20,
                                },
                                visible: {

                                    opacity: 1, 
                                    y: 0,
                                    transition: {
                                        delay: 0.1,
                                        duration: 0.4,
                                        ease: "linear",
                                    }
                                },
                            }}> 
                                <div className="mt-5">
                                    <Image src={'/images/sales-stats.png'} width={500} height={500} alt="metrics" />
                                </div>
                            </Animate>
                        </div>
                    </div>
                    <div className="w-[40%] rounded-3xl bg-dark border border-dark mt-10 p-20 shadow-2xl">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-[#1c1919] rounded-3xl border border-gray-800 p-5 flex flex-col items-center">
                                <HiOutlineSquare3Stack3D size="2.5rem" className="text-secondary" />
                                <div className="flex mt-6">
                                    <Image src={'/images/profile-1.jpg'} width={50} height={40} alt="visitors" className="rounded-full" />
                                    <Image src={'/images/profile-2.jpg'} width={50} height={40} alt="visitors" className="rounded-full -ml-1 border-2 border-[#131111]" />
                                </div>
                            </div>
                            <Animate innerClassName="h-full" viewDelay={0.5} animation={{
                                hidden: {
                                    x: -20,
                                },
                                visible: {
                                    x: 0,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }
                                },
                            }}> 
                                <div className="bg-[#1c1919] rounded-3xl border border-gray-800 p-5 h-full flex flex-col">
                                    <p className="text-white mb-3 text-sm">Transactions</p>
                                    <sup className="text-success text-xs text-right -mb-3">
                                        <BsFillArrowUpCircleFill size="1rem" className="inline mr-1" />
                                        +12%
                                    </sup>
                                    <h2 className="text-6xl font-base mt-2 text-white"><CounterAnimation value={43} />k</h2>
                                </div>
                            </Animate>
                        </div>
                        <div className="mt-10 text-center">
                        <h4 className="font-medium text-white text-2xl mb-5">Widget control</h4>

                            <Animate className="" viewDelay={0.5} animation={{
                                hidden: {
                                    opacity: 0.1,
                                    y: 30,
                                },
                                visible: {

                                    opacity: 1, 
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        duration: 1,
                                        ease: "linear",
                                    }
                                },
                            }}> 
                                <p className="text-white/70 font-light text-lg">Reports provide a comprehensive overview of important aspects of web analytics</p>
                            </Animate>
                        </div>
                    </div>
                </div>
                <div className="flex w-[60%] mx-auto items-center mt-16 relative">
                    <p className="text-3xl font-medium mr-2 relative -bottom-8 text-nowrap">Up to</p>
                    <h1 className="text-[8rem] font-medium mr-2">45%</h1>
                    <Animate className="" viewDelay={0.5} animation={{
                        hidden: {
                            opacity: 0.1,
                            y: 30,
                        },
                        visible: {

                            opacity: 1, 
                            y: 0,
                            transition: {
                                type: "spring",
                                duration: 1,
                                ease: "linear",
                            }
                        },
                    }}> 
                        <p className="flex-1 text-lg">
                            Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making important, informed decisions.
                        </p>
                    </Animate>
                </div>
            </AppContainer>
        </div>
    )
}