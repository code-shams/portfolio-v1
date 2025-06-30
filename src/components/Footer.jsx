import { ArrowUpFromDot } from "lucide-react";
import React from "react";

const Footer = () => {
    return (
        <div className="text-[#7A7A7A] flex items-center justify-between">
            <p className="text-xs sm:text-sm">
                // Built with React.js, TailwindCSS and
                <span className="text-base sm:text-2xl"> ☕</span>.
                <br />
                © 2025 Maksudur Rahman Shams. All rights reserved.
            </p>
            <a
                href="#"
                className="h-max animate-bounce bg-black p-[1px] py-2 rounded-full"
            >
                <ArrowUpFromDot color="white"></ArrowUpFromDot>
            </a>
        </div>
    );
};

export default Footer;
