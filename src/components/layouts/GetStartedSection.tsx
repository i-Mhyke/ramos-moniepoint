import { LiaLinkSolid } from "react-icons/lia"
import { AppContainer } from "../commons/AppContainer"
import { Button } from "../ui/Buttons"
import { Animate } from "../commons/Animations"
import { TextAnimate, WordAnimate } from "../commons/Animations/TextAnimate"


export const GetStartedSection = () => {
    return (
        <AppContainer className="pt-10 pb-40 flex flex-col items-center">
            <Animate className="" once={false} animation={{
                hidden: {
                    scale: 2,
                    opacity: 0,
                },
                visible: {
                    scale: 1, 
                    opacity: 1,
                    transition: {
                        duration: 1.5,
                        ease: "easeInOut",
                        type: "spring",
                        bounce: 0.2,
                    }
                },
            }}> 
                <div className="bg-primary rounded-3xl shadow-2xl flex justify-center items-center w-[6rem] h-[6rem] ">
                    <LiaLinkSolid size="3rem" className="text-white" />
                </div>
            </Animate>
            <div className="max-w-2xl text-center">
                <h1 className="text-[8rem] font-medium mt-3 text-nowrap">
                    <WordAnimate text="Get started" animation={{
                        hidden: {
                            y: 50,
                            opacity: 0,
                        },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.7,
                                ease: "easeInOut",
                                type: "spring",
                                bounce: 0.1,
                                staggerChildren: 0.2,
                            }
                        },
                    }} />
                </h1>
                <p className="text-2xl text-balance text-gray-500">Turn information into advantage! Start using Ramos today. Signup for a free trial.</p>
                    <Animate className="" once={false} animation={{
                        hidden: {
                            scale: 0.3,
                            opacity: 0,
                        },
                        visible: {

                            scale: 1, 
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                ease: "easeInOut",
                            }
                        },
                        
                    }}> 
                        <div className="flex gap-4 mt-16 justify-center">
                            <Button variant="light" className="min-w-[200px]">Request a demo</Button>
                            <Button variant="primary" className="min-w-[200px]" >Start for free</Button>
                        </div>
                    </Animate>
            </div>
        </AppContainer>
    )
}