import { motion } from "framer-motion";
import React from "react";
import a11 from "../assets/project-pics/a11.png";
import a10 from "../assets/project-pics/a10.png";
import a9 from "../assets/project-pics/a9.png";
import GlareHover from "../libs/animation/GlareHover/GlareHover";
import github from "../assets/cta-logo/github_cta.svg";
import { Globe } from "lucide-react";

const Projects = () => {
    return (
        <div className="overflow-hidden">
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
                viewport={{ once: false }}
            >
                My Projects
            </motion.h1>
            <section className="space-y-5 sm:space-y-15">
                {/* Project 1 KindleVent */}
                <motion.div
                    className="mt-5 bg-sky-50/50 p-2 sm:p-5 min-h-40 border-3 border-[#9e9e9e]/20 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-7 overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.2,
                        opacity: { duration: 0.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                >
                    <div className="group w-full sm:w-[60%] h-50 sm:min-h-95 sm:scale-95 overflow-hidden hover:scale-100 transition-all duration-300 hover:shadow-2xl rounded-lg relative">
                        <img
                            src={a11}
                            className="w-full sm:absolute top-0 lg:group-hover:-translate-y-[62%] rounded-lg transition-all duration-2000 ease-in-out"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[40%]">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            KindleVent
                        </h1>
                        <p className="text-sm sm:text-base">
                            A community-driven social service events platform.
                        </p>
                        <br />
                        <p className="text-sm sm:text-base">
                            The project contains:
                        </p>
                        <ul className="list-disc text-sm sm:text-base ml-5 sm:ml-0">
                            <li>Modern UI</li>
                            <li>CRUD Functionalities</li>
                            <li>Database Integration</li>
                            <li>Secure API Calls</li>
                            <li>User Authentication and Authorization</li>
                        </ul>
                        <div className="flex flex-wrap mt-5 gap-4">
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/react-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    React
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/tailwindcss.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    TailwindCSS
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/nodejs-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Node.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/officel/96/express-js.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Express.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/mongodb-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Express.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/java-web-token.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    JWT
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/firebase.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Firebase
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-12 flex gap-4">
                            <a
                                href="https://github.com/code-shams/kindleVent-client-a11-ph"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    borderColor="0px solid transparent"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        View Source
                                        <span>
                                            <img
                                                className="w-6 h-6"
                                                src={github}
                                                alt=""
                                            />
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                            <a
                                href="https://kindlevent-sh.web.app/"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        Visit
                                        <span className="w-6 h-6">
                                            <Globe></Globe>
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2 CozyNest */}
                <motion.div
                    className="mt-5 bg-lime-50/30 p-2 sm:p-5 min-h-40 border-3 border-[#9e9e9e]/20 rounded-2xl flex flex-col sm:flex-row-reverse justify-between sm:items-center gap-7 overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.2,
                        opacity: { duration: 0.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                >
                    <div className="group w-full sm:w-[60%] h-50 sm:min-h-95 sm:scale-95 overflow-hidden hover:scale-100 transition-all duration-300 hover:shadow-2xl rounded-lg relative">
                        <img
                            src={a10}
                            className="w-full sm:absolute top-0 lg:group-hover:-translate-y-[62%] rounded-lg transition-all duration-2000 ease-in-out"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[40%]">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            CozyNest
                        </h1>
                        <p className="text-sm sm:text-base">
                            A roommate finder platform where individuals can
                            find their perfect roommates.
                        </p>
                        <br />
                        <p className="text-sm sm:text-base">
                            The project contains:
                        </p>
                        <ul className="list-disc text-sm sm:text-base ml-5">
                            <li>User Dashboard</li>
                            <li>CRUD Functionalities</li>
                            <li>Database Integration</li>
                            <li>Search, filter & sort Functionalities</li>
                        </ul>
                        <div className="flex flex-wrap mt-5 gap-4">
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/react-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    React
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/tailwindcss.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    TailwindCSS
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/nodejs-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Node.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/officel/96/express-js.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Express.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-between items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/mongodb-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Express.js
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://reactrouter.com/favicon-light.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 w-max absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    React-router
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/firebase.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Firebase
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-12 flex gap-4">
                            <a
                                href="https://github.com/code-shams/cozyNest-client-A10PH"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    borderColor="0px solid transparent"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        View Source
                                        <span>
                                            <img
                                                className="w-6 h-6"
                                                src={github}
                                                alt=""
                                            />
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                            <a
                                href="https://cozynest-code.web.app/"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        Visit
                                        <span className="w-6 h-6">
                                            <Globe></Globe>
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Project 3 VanTasy */}
                <motion.div
                    className="mt-5 bg-emerald-50/70 p-2 sm:p-5 min-h-40 border-3 border-[#9e9e9e]/20 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-7 overflow-hidden"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: 0.2,
                        opacity: { duration: 0.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                >
                    <div className="group w-full sm:w-[60%] h-50 sm:min-h-95 sm:scale-95 overflow-hidden hover:scale-100 transition-all duration-300 hover:shadow-2xl rounded-lg relative">
                        <img
                            src={a9}
                            className="w-full sm:absolute top-0 lg:group-hover:-translate-y-[75%] rounded-lg transition-all duration-2000 ease-in-out"
                            alt=""
                        />
                    </div>
                    <div className="w-full sm:w-[40%]">
                        <h1 className="text-lg sm:text-xl font-semibold">
                            Vantasy
                        </h1>
                        <p className="text-sm sm:text-base">
                            A local event exploring platform .
                        </p>
                        <br />
                        <p className="text-sm sm:text-base">
                            The project contains:
                        </p>
                        <ul className="list-disc text-sm sm:text-base ml-5 sm:ml-0">
                            <li>Urban Themed UI</li>
                            <li>Public/Private Routes</li>
                            <li>User Authentication and Authorization</li>
                        </ul>
                        <div className="flex flex-wrap mt-5 gap-4">
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/react-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    React
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/tailwindcss.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    TailwindCSS
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://reactrouter.com/favicon-light.png"
                                    alt=""
                                />
                                <span className="w-max bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    React-router
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://icongr.am/devicon/javascript-original.svg?size=96"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    JavaScript
                                </span>
                            </div>
                            <div className="group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center">
                                <img
                                    className="w-8 h-8 p-1 bg-black/5 border border-[#9e9e9e] rounded-full"
                                    src="https://img.icons8.com/color/96/firebase.png"
                                    alt=""
                                />
                                <span className="bg-black/5 px-2 absolute -bottom-10 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                    Firebase
                                </span>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-12 flex gap-4">
                            <a
                                href="https://github.com/code-shams/vantasy-a9-ph"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    borderColor="0px solid transparent"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        View Source
                                        <span>
                                            <img
                                                className="w-6 h-6"
                                                src={github}
                                                alt=""
                                            />
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                            <a
                                href="https://evetasy-code.web.app/"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="max-content"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    glareSize={300}
                                    borderRadius="10px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex flex-row-reverse items-center gap-1 sm:gap-2">
                                        Visit
                                        <span className="w-6 h-6">
                                            <Globe></Globe>
                                        </span>
                                    </button>
                                </GlareHover>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Projects;
