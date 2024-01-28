import Image from "next/image"
import { AppContainer } from "../commons/AppContainer"
import { TextAnimate } from "../commons/Animations/TextAnimate"
import { Animate } from "../commons/Animations"

const footerLinks = ["About", "Why Us", "Platform", "Pricing", "Contacts"]
const socialLinks = ["Facebook", "Instagram", "Linkedin"]
const address = [
    {
        region: "Warrensville Heights",
        address: "14418, Vineyard Drive, NC",
        zip: "44128"
    },
    {
        region: "Saint louis",
        address: "1366 Penn Street",
        zip: "63101"
    }
]

export const Footer = () => {
    return (
        <div className="bg-dark text-white pt-10">
            <AppContainer className="py-20">
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        {
                            footerLinks.map((link) => (
                                <a key={link} href="#" className="text-light/50 text-2xl">{link}</a>
                            ))
                        }
                    </div>
                    <Animate className="" once={false} animation={{
                        hidden: {
                            y: 30,
                        },
                        visible: {
                            y: 0, 
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut",
                                type: "spring",
                                bounce: 0.2,
                            }
                        },
                    }}> 
                    <a href="mailto:hello@ramos.com" className="font-medium text-6xl">
                        hello@ramos.com
                    </a>
                    </Animate>
                </div>
                <div className="border-t border-light/50 mt-20 pt-20 flex justify-between">
                    <div className="flex w-[35%] justify-between">
                        {
                            address.map((addressItem) => (
                                <Animate className="" key={addressItem.region} once={false} animation={{
                                    hidden: {
                                        y: 30,
                                    },
                                    visible: {
                                        y: 0, 
                                        transition: {
                                            duration: 1.5,
                                            ease: "easeInOut",
                                            type: "spring",
                                            bounce: 0.2,
                                        }
                                    },
                                }}> 
                                    <div className="flex flex-col gap-1">
                                        <h5 className="text-lg font-medium">{addressItem.region}</h5>
                                        <p className="text-light/50 text-lg">{addressItem.address}</p>
                                        <p className="text-light/50 text-lg">{addressItem.zip}</p>
                                    </div>
                                </Animate>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-5">
                        {
                            socialLinks.map((link) => (
                                <a key={link} href="#" className="text-light/70 text-2xl text-right">{link}</a>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-10 flex justify-between gap-20">
                    <h1 className="text-[11rem] leading-[1.1] font-medium text-nowrap">
                        <TextAnimate text="Ramos" animation={{
                            hidden: {
                                y: 50,
                                opacity: 0,
                            },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }
                            },
                        
                        }} />
                        <sup className="text-3xl align-super -ml-7">&#9415;</sup>
                    </h1>
                    <div className="flex items-center w-1/2 justify-between">
                        <a href="#" className="text-light/50 text-xl">Privacy policy</a>
                        <a href="#" className="text-light/50 text-xl">License agreement</a>
                        <Animate className="" once={false} animation={{
                            hidden: {
                               scale: 0.2,
                            },
                            visible: {
                                scale: 1, 
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    type: "spring",
                                    bounce: 0.2,
                                }
                            },
                        }}> 
                            <div className="bg-white rounded-3xl w-[150px] h-[150px] flex items-center justify-center">
                                <Image src="/images/qr-code.png" width={150} height={150} alt="qr code" />
                            </div>
                        </Animate>
                    </div>
                    
                </div>
            </AppContainer>
        </div>
    )
}