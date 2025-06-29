import { motion } from "framer-motion";
import React from "react";
import a11 from "../assets/project-pics/a11.png";

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
                    opacity: { duration: 2, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
            >
                My Projects
            </motion.h1>
            <motion.div
                className="mt-5 p-2 sm:p-5 min-h-40 border border-[#9e9e9e] rounded-2xl flex flex-col sm:flex-row justify-between items-center"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: 0.2,
                    opacity: { duration: 2, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
            >
                <div className="group w-full sm:w-[65%] h-50 sm:min-h-95 scale-95 overflow-hidden hover:scale-100 transition-all duration-300 hover:shadow-xl rounded-lg relative">
                    <img src={a11} className="w-full sm:absolute top-0 lg:group-hover:-translate-y-[66%] rounded-lg transition-all duration-1000" alt="" />
                </div>
                <div className="w-[35%]">

                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
