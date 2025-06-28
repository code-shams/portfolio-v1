import { Menu, Moon } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const handleHamMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <div className="flex justify-between fixed top-0 z-50 contain  bg-white/5 pt-2 rounded-full">
            <div>
                <a
                    href="#"
                    className="bg-black px-2 py-2 rounded-full text-white text-xs"
                >
                    {"< shams />"}
                </a>
            </div>
            <div className="w-max rounded-full border border-[#9e9e9e] p-[2px] backdrop-blur-xs hidden sm:block">
                <ul className="flex justify-between items-center gap-2 text-sm p-1 rounded-full bg-black/10">
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#">HOME</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#project">PROJECT</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#stack">STACK</a>
                    </li>
                    <li
                        className="hover:bg-white rounded-full px-3 py-1
                        transition-all duration-500"
                    >
                        <a href="#education">EDUCATION</a>
                    </li>
                    <li className="hover:bg-white rounded-full px-3 py-1 transition-all duration-500">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-between items-center gap-5 relative">
                <span className="cursor-pointer">
                    <Moon size={30}></Moon>
                </span>
                <span
                    className="cursor-pointer sm:hidden"
                    onClick={handleHamMenu}
                >
                    <Menu size={30}></Menu>
                </span>
                <span
                    className={`border border-[#9e9e9e] min-h-40 w-max bg-black/5 backdrop-blur-xs top-10 right-0 absolute rounded-lg transition-all duration-300 p-3 ${
                        menuState ? "translate-0" : "scale-0 -translate-y-full"
                    }`}
                >
                    <ul className="flex flex-col gap-2 text-sm p-1">
                        <li className="lowercase">
                            <a href="#">HOME</a>
                        </li>
                        <li className="lowercase">
                            <a href="#project">PROJECT</a>
                        </li>
                        <li className="lowercase">
                            <a href="#stack">STACK</a>
                        </li>
                        <li className="lowercase">
                            <a href="#education">EDUCATION</a>
                        </li>
                        <li className="lowercase">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
