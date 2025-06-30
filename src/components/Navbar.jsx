import {
    Download,
    HandMetalIcon,
    Home,
    Menu,
    Moon,
    Sparkles,
    ToolCase,
    Zap,
} from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const handleHamMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <div className="flex justify-between fixed top-0 z-50 contain backdrop-blur-xs bg-white/5 pt-2 rounded-full">
            <div>
                <a
                    href="#"
                    className="bg-black px-2 py-2 rounded-full text-white text-xs"
                >
                    {"< shams />"}
                </a>
            </div>
            <div className="w-max rounded-full border border-[#9e9e9e] p-[2px] backdrop-blur-xs hidden md:block">
                <ul className="flex justify-between items-center gap-2 text-sm p-1 rounded-full bg-black/10">
                    <li className="hover:bg-white transition-all duration-500 rounded-full px-3 py-1">
                        <a href="#">HOME</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#stack">STACK</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#project">PROJECT</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-5 relative">
                <span className="cursor-pointer">
                    <Moon className="size-5 sm:size-6"></Moon>
                </span>
                <span className="cursor-pointer">
                    <Download className="size-5 sm:size-6"></Download>
                </span>
                {/* Mobile Menu */}
                <span
                    className="cursor-pointer md:hidden"
                    onClick={handleHamMenu}
                >
                    <Menu className="size-6 sm:size-6"></Menu>
                </span>
                <span
                    className={`border border-[#9e9e9e] min-h-40 min-w-30 w-max bg-[#d9d8d8] top-10 right-0 absolute rounded-lg transition-all duration-300 p-3 md:hidden ${
                        menuState ? "translate-0" : "scale-0 -translate-y-full"
                    }`}
                >
                    <ul className="flex flex-col gap-2 text-sm p-1">
                        <li className="lowercase">
                            <a href="#" className="flex items-center gap-1">
                                <Home size={18}></Home>
                                HOME
                            </a>
                        </li>
                        <li className="lowercase">
                            <a
                                className="flex items-center gap-1"
                                href="#about"
                            >
                                <Sparkles size={18}></Sparkles>
                                About
                            </a>
                        </li>
                        <li className="lowercase">
                            <a
                                className="flex items-center gap-1"
                                href="#stack"
                            >
                                <ToolCase size={18}></ToolCase>
                                STACK
                            </a>
                        </li>
                        <li className="lowercase">
                            <a
                                className="flex items-center gap-1"
                                href="#project"
                            >
                                <Zap size={18}></Zap>
                                PROJECT
                            </a>
                        </li>
                        <li className="lowercase">
                            <a
                                className="flex items-center gap-1"
                                href="#contact"
                            >
                                <HandMetalIcon size={18}></HandMetalIcon>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
