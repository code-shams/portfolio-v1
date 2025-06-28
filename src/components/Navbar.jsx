import { Moon } from "lucide-react";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center fixed top-0 z-50 contain backdrop-blur-xs bg-white/5 p-2 rounded-full overflow-hidden">
            <div>
                <a href="#" className="bg-black px-2 py-2 rounded-full text-white text-xs">
                    {"< shams />"}
                </a>
            </div>
            <div className="w-max rounded-full border border-[#9e9e9e] p-[2px] backdrop-blur-xs">
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
            <div>
                <span className="cursor-pointer">
                    <Moon size={30}></Moon>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
