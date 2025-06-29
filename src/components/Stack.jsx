import React, { useState } from "react";
import { motion } from "framer-motion";
import { SwordsIcon } from "lucide-react";
import milkyway from "../assets/milky_way.png";

const Stack = () => {
    const [tech, setTech] = useState("an constantly expanding stack");
    const handleStack = (techName) => {
        setTimeout(() => {
            setTech(techName);
        }, 100);
    };
    return (
        <div className="overflow-x-hidden">
            <motion.h1
                className="text-center text-2xl sm:text-4xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    opacity: { duration: 0.5, ease: "easeInOut" },
                }}
                viewport={{ once: false }} // animate only once when in view
            >
                Stack
            </motion.h1>

            <motion.div
                onMouseLeave={() =>
                    handleStack("an constantly expanding stack")
                }
                className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    delay: 0.2,
                    opacity: { duration: 0.5, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
            >
                <div className="bg-black/5 border border-[#9e9e9e] rounded-2xl col-span-3 sm:col-span-4 lg:col-span-3 p-3">
                    <span className="flex justify-center sm:block">
                        <SwordsIcon></SwordsIcon>
                    </span>
                    <div className="text-sm sm:text-xl text-center sm:text-left w-full">
                        Solving real problems with
                        <br />
                        {tech}
                    </div>
                </div>
                <div
                    onMouseEnter={() =>
                        handleStack("an constantly expanding stack")
                    }
                    className="p-2 border border-[#9e9e9e] rounded-2xl flex justify-center"
                >
                    <img
                        src={milkyway}
                        className="w-14 h-14 sm:w-18 sm:h-18"
                        alt=""
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("HTML5")}
                    className="p-2 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        src="https://icongr.am/devicon/html5-original.svg?size=35"
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0 transition-all duration-300"
                        alt="HTML5"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("CSS")}
                    className="p-2 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        src="https://icongr.am/devicon/css3-original.svg?size=35"
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        alt="CSS3"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("TailwindCSS")}
                    className="p-2 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/color/96/tailwindcss.png"
                        alt="TailwindCSS"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("JavaScript")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/javascript-original.svg?size=96"
                        alt="JavaScript"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("React")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/react-original.svg?size=96"
                        alt="React"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("React-Router")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://reactrouter.com/favicon-light.png"
                        width="35"
                        alt="React-Router"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Axios")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://axios-http.com/assets/favicon.ico"
                        alt="Axios"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Motion")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://framerusercontent.com/images/p82ZbUPQdsB3LwOnllbkrrIIH5Y.png"
                        alt="Framer Motion"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Node.js")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/nodejs-original.svg?size=35"
                        alt="Node.js"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Express.js")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/officel/96/express-js.png"
                        alt="Express.js"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("MongoDB")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/mongodb-original.svg?size=35"
                        alt="MongoDB"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Firebase")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/color/96/firebase.png"
                        alt="Firebase"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("JWT")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/color/96/java-web-token.png"
                        alt="JWT "
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Git")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/git-original.svg?size=96"
                        alt="Git"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Github")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/office/96/github.png"
                        alt="GitHub"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("VS Code")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/color/96/visual-studio-code-2019.png"
                        alt="VS Code"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Postman API")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
                        alt="Postman API"
                    />
                </div>
                <div
                    onMouseEnter={() => handleStack("Linux")}
                    className="p-2 w-full h-18 sm:h-24 border border-[#9e9e9e] rounded-2xl flex justify-center items-center group"
                >
                    <img
                        className="w-8 h-8 sm:w-14 sm:h-14 sm:grayscale group-hover:grayscale-0
                    transition-all duration-300"
                        src="https://icongr.am/devicon/linux-original.svg?size=35&color=currentColor"
                        alt="Linux System"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Stack;
