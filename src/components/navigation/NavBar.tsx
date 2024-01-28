import { LiaLinkSolid } from "react-icons/lia"
import { AppContainer } from "../commons/AppContainer"
import { Button } from "../ui/Buttons"
import { Animate } from "../commons/Animations"

const navList = [
    {
        name: 'Dashboard',
        path: '#'
    },
    {
        name: 'Reports',
        path: '#'
    },
    {
        name: 'Documents',
        path: '#'
    },
    {
        name: 'History',
        path: '#'
    },
    {
        name: 'Settings',
        path: '#'
    },
]

export const NavBar = () => {
    return (
        <AppContainer className="">
            <div className="flex justify-between bg-dark text-white rounded-2xl py-2 pl-3 pr-2 mt-5 overflow-hidden">
                <Animate className="flex" innerClassName="flex items-center" viewDelay={0} once={true} animation={{
                    hidden: {
                        y: 50,
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
                    <div className="flex items-center">
                        <LiaLinkSolid size={18} />
                        <h4 className="font-semibold ml-1 text-lg">ramos</h4>
                    </div>
                </Animate>
                <Animate className="" viewDelay={0} once={true} animation={{
                        hidden: {
                            y: 50,
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
                    <div className="bg-[rgb(37,37,37)] rounded-xl px-4 py-3">
                        <ul className="flex items-center space-x-7">
                            {navList.map((nav, index) => (
                                <li key={index} className="">
                                    <a href={nav.path} className="text-sm hover:text-primary p-1 transition-all duration-300">{nav.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Animate>
                <div>
                    <Animate className="" viewDelay={0} once={true} animation={{
                        hidden: {
                            y: 50,
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
                    <Button variant="white">
                        Sign Up
                    </Button>
                    </Animate>
                </div>
            </div>
        </AppContainer>
    )
}