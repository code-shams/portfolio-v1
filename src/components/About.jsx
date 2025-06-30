import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="overflow-x-hidden">
            <motion.h1
                className="text-center text-2xl sm:text-4xl"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    opacity: { duration: 0.5, ease: "easeInOut" },
                }}
                viewport={{ once: false }} // animate only once when in view
            >
                About Me
            </motion.h1>

            <motion.div
                className="mt-5 bg-black/5 p-2 sm:p-5 sm:pt-0 rounded-2xl border border-[#9e9e9e]"
                initial={{ x: -100, opacity: 0 }}
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
                <div className="mx-auto text-left text-pretty text-sm sm:text-base text-black sm:text-[#7A7A7A]">
                    <p className="w-full bg-black/70 text-white text-center rounded-t-2xl rounded-b-lg p-2 sm:p-3 sm:pt-0 mt-1 mb-2 sm:mb-3">
                        Computer Science student, who finds purpose in writing
                        code,<br className="block sm:hidden" />preferably with a cup of coffee nearby
                        <span className="text-base sm:text-2xl"> ☕</span>.
                    </p>
                    <div className="space-y-2 sm:space-y-3 cursor-default">
                        <div className="relative overflow-hidden group transition-all duration-500 bg-black/5 p-2 sm:p-4 hover:text-black ease-in-out rounded-lg">
                            <span className="animate-pulse sm:animate-none sm:group-hover:animate-pulse transition-all ease-out">
                                🔥{" "}
                            </span>
                            Currently, I'm engaged in MERN stack development -
                            exploring frontend technologies such as React,
                            modern component libraries, and UI/UX best
                            practices, while also diving into backend
                            development, database design, and web security.
                            Thus, preparing myself to be a well-rounded
                            full-stack developer.
                            <div className="hidden sm:block absolute w-1 h-full right-0 top-0 scale-0 group-hover:scale-100 transition-all duration-500 bg-black"></div>
                        </div>
                        <div className="relative overflow-hidden group transition-all duration-500 bg-black/5 p-2 sm:p-4 hover:text-black ease-in-out rounded-lg">
                            <span className="animate-pulse sm:animate-none sm:group-hover:animate-pulse transition-all ease-out">
                                🚀{" "}
                            </span>
                            Future Plans: I plan to deepen my expertise in React
                            and Node.js, followed by exploring advanced
                            technologies like Next.js and TypeScript.
                            Additionally, I aim to expand my understanding of
                            backend tools such as Docker, WebSockets, and cloud
                            services.
                            <div className="hidden sm:block absolute w-1 h-full right-0 top-0 scale-0 group-hover:scale-100 transition-all duration-500 bg-black"></div>
                        </div>
                        <div className="relative overflow-hidden group transition-all duration-500 bg-black/5 p-2 sm:p-4 hover:text-black ease-in-out rounded-lg">
                            <span className="animate-pulse sm:animate-none sm:group-hover:animate-pulse transition-all ease-out">
                                📚{" "}
                            </span>
                            Fun Fact: When I’m not coding, I’m usually deep into
                            a manga or some book. Some day, I'd love to dive
                            into Arduino projects and build something fun.
                            <div className="hidden sm:block absolute w-1 h-full right-0 top-0 scale-0 group-hover:scale-100 transition-all duration-500 bg-black"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
