'use client'
import { TbChartHistogram } from "react-icons/tb"
import { AppContainer } from "../commons/AppContainer"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProgressBar, SegmentedProgressBar } from "../commons/ProgressBar";
import Image from "next/image";
import { HiOutlineDocumentReport, HiOutlinePresentationChartLine } from "react-icons/hi";
import { GoGitCompare } from "react-icons/go";
import { Button } from "../ui/Buttons";
import { TextAnimate } from "../commons/Animations/TextAnimate";
import { Animate } from "../commons/Animations";

const salesList = [
    {
        title: 'Min. price',
        value: '$ 1,2K',
        image: '/images/profile-1.jpg'
    },
    {
        title: 'Max. price',
        value: '$ 2,2K',
        image: '/images/profile-2.jpg'
    },
]
const reportsList = [
    {
        title: "Sales reports",
        profit: "$ 264,2K",
        chart: "/images/data-trend.png",
        icon: HiOutlineDocumentReport
    },
    {
        title: "Finance reports",
        profit: "$ 264,2K",
        chart: "/images/data-trend.png",
        icon: GoGitCompare
    },
    {
        title: "Insights",
        profit: "$ 264,2K",
        chart: "/images/data-trend.png",
        icon: HiOutlinePresentationChartLine
    },
]

export const DataControl = () => {
    const [progress, setProgress] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
        delay: 500,
    })
   useEffect(() => {
        if (inView) {
            setProgress(100)
        }else{
            setProgress(0)
        }
   }, [inView])
    return (
        <AppContainer className="py-32">
            <h1 className="text-[8rem] leading-[1.1] font-medium mt-5 text-left text-balance">
                <TextAnimate text="We give you full" className="py-2" />
                <TextAnimate text="control over your data" styleIndex={{
                        index: 0,
                        className: "text-[#d2d2d2]",
                    }} />
                {/* We give you full <span className="text-[#cccccc]">control</span> over your data  */}
            </h1>
            <div className="grid grid-cols-2 gap-10 mt-20">
                <div className="rounded-3xl border bg-light p-14 relative">
                    <div style={{
                        width: '100%',
                        height: '60%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        background: "url('/images/squares-fig.png')",
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}>
                    </div>
                    <div className="relative flex">
                        <div className="bg-white rounded-3xl p-12 text-center w-[50%] space-y-5 shadow-2xl">
                            <h5 className="text-lg font-medium">Conversion rate</h5>
                            <div className="relative w-full p-5 rounded-3xl animate-background-color" ref={ref}>
                                <Animate className="absolute -top-3 -left-3 z-[1]" once={false} animation={{
                                    hidden: {
                                        scale: 0.1
                                    },
                                    visible: {
                                        scale: 1, 
                                        transition: {
                                            duration: 2,
                                            ease: "easeInOut",
                                            type: "spring",
                                            bounce: 0.5
                                        }
                                    },
                                }}> 
                                    <div className="relative z-[1] w-11 h-11 rounded-full bg-light  flex items-center justify-center shadow-md">
                                        <div className="bg-white rounded-full flex items-center justify-center w-8 h-8">
                                            <TbChartHistogram size="1rem" className="text-dark" />
                                        </div>
                                    </div>
                                </Animate>
                                <ProgressBar duration={2} className="absolute w-full h-full top-0 left-0 rounded-3xl" fillclassname="bg-secondary" progress={progress} />
                                <h3 className="text-6xl text-center font-medium relative z-[2]">2,3%</h3>
                            </div>
                            <p className="text-gray-500 text-balance text-lg font-light">Percentage of website visitors</p>
                        </div>
                            <Animate className="w-[50%]" once={false} animation={{
                                    hidden: {
                                        x: -20
                                    },
                                    visible: {
                                        x: 0, 
                                        transition: {
                                            duration: 2,
                                            ease: "easeInOut",
                                            type: "spring",
                                            bounce: 0.5
                                        }
                                    },
                                }}> 
                                <div className="bg-white rounded-3xl p-5 w-[100%] relative -ml-8 top-10 shadow-2xl flex flex-col">
                                    <h5 className="font-light text-gray-500">Sales revenue</h5>
                                    <h3 className="text-3xl font-base text-balance my-3"><span className="text-xl font-normal">$</span> 131,2K</h3>
                                    <div className="my-3" ref={ref}>
                                        <SegmentedProgressBar progress={progress} />
                                    </div>
                                    <div className="my-5">
                                        {
                                            salesList.map((sale) => (
                                                <div key={sale.title} className="flex justify-between items-center">
                                                    <div className="flex gap-2 items-center">
                                                        <Image src={sale.image} width={35} height={35} alt="profile" className="rounded-full" />
                                                        <p className="text-sm text-gray-500 font-light">{sale.title}</p>
                                                    </div>
                                                    <p className="font-medium">{sale.value}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="border-t mt-5 pt-3 flex justify-between w-full">
                                        <p className="text-gray-500 text-sm font-light">Engagement rate</p>
                                        <p className="font-medium">47.84%</p>
                                    </div>
                                </div>
                            </Animate>
                    </div>
                    <div className="text-center pt-14 px-8">
                        <h4 className="font-medium text-3xl mt-10">Improved customer service</h4>
                        <p className="text-gray-500 text-lg font-light mt-4">
                            Analytics helps optimize service processes by providing information on how to 
                            improve interactions with customers and increase their satisfaction.
                        </p>
                    </div>
                </div>
                <div className="rounded-3xl border bg-light p-14 relative">
                    <div style={{
                        width: '100%',
                        height: '60%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        background: "url('/images/squares-fig.png')",
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain'
                    }}>
                    </div>
                    <div className="w-[90%] mx-auto flex flex-col relative stacked-cards-container">
                        {
                            reportsList.map((report, index) => (
                                <div key={index} 
                                    className={`rounded-3xl bg-white p-5 shadow-lg border stacked-card flex justify-between gap-3 w-full`}>
                                        <div className="flex flex-col ">
                                            <div className="flex items-center gap-2">
                                                <report.icon size="2rem" className="text-dark bg-light p-2 rounded-lg" />
                                                <p className="font-light">{report.title}</p>
                                            </div>
                                            <div className="mt-10 flex-1 flex flex-col justify-end">
                                                <h5 className="text-gray-500 font-light text-sm">Total profit</h5>
                                                <h3 className="text-2xl font-medium text-balance mt-2">{report.profit}</h3>
                                                <Button variant="secondary" className="mt-5 text-dark text-xs px-5 py-2">Data visualization</Button>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <Image src={report.chart} width={250} height={250} alt="chart" />
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center pt-5 px-14">
                        <h4 className="font-medium text-3xl mt-10">Monitoring key indicators</h4>
                        <p className="text-gray-500 text-lg font-light mt-4">
                            Analytics platforms allow businesses to track KPIs, an important tool for measuring success and achieving goals.
                        </p>
                    </div>
                </div>
            </div>
        </AppContainer>
    )
}