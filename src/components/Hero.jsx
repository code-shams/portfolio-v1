import React from "react";
import DecryptedText from "../libs/animation/DecryptedText";
import self from "../assets/self.png";
import { Code2Icon, Coffee, Download, MapPin } from "lucide-react";
import GlareHover from "../libs/animation/GlareHover/GlareHover";
import github from "../assets/cta-logo/github_cta.svg";
import linkedin from "../assets/cta-logo/linkedin_cta.svg";
import whatsapp from "../assets/cta-logo/zap.svg";
import { motion } from "framer-motion";
const Hero = () => {
    const textStyle = {
        textOrientation: "upright",
        writingMode: "vertical-rl",
        letterSpacing: "-3px",
    };
    return (
        <>
            <section className="flex justify-between relative">
                <section className="hidden lg:block">
                    <span
                        style={textStyle}
                        className="absolute cursor-default min-h-max top-10 shadow-xs rounded-full uppercase hidden sm:block font-light text-black/50"
                    >
                        <DecryptedText
                            text="fullstack developer"
                            speed={50}
                            maxIterations={20}
                        />
                    </span>
                </section>
                <section className="overflow-hidden w-full">
                    <motion.section
                        className="w-full flex justify-center"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            opacity: { duration: 0.5, ease: "easeInOut" },
                        }}
                        viewport={{ once: false }}
                    >
                        <section>
                            {/* Intro section with name and pic */}
                            <div className="flex flex-col-reverse sm:flex-row items-center relative">
                                <p className="text-xl sm:text-4xl  font-bold">
                                    <span className="text-[#7A7A7A]">I'm </span>
                                    <span className="w-max">
                                        Maksudur Rahman
                                    </span>
                                </p>
                                <div className="ml-3 border-4 rounded-full group w-15 sm:w-25 overflow-hidden relative flex justify-center items-center">
                                    <img
                                        src={self}
                                        className="w-full grayscale-50 group-hover:opacity-0 z-10 transition-all duration-300 ease-in-out delay-300"
                                        alt=""
                                    />
                                    <span className="absolute opacity-0 z-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-300 font-bold text-3xl">
                                        Shams
                                    </span>
                                </div>
                                <span className="text-xl sm:text-4xl  font-bold text-[#7A7A7A] hidden sm:block absolute sm:-right-7 sm:bottom-5">
                                    ,
                                </span>
                            </div>
                            {/* Designation */}
                            <section className="text-xl sm:text-4xl  font-bold">
                                <div className="flex items-center justify-center gap-3">
                                    <Code2Icon className="size-5 sm:size-10"></Code2Icon>
                                    <span>MERN-Stack </span>
                                    <span className="text-[#7A7A7A]">
                                        Developer
                                    </span>
                                </div>
                            </section>
                            {/* location */}
                            <section className="sm:pt-4 text-xl sm:text-4xl  font-bold">
                                <div className="text-center flex items-center gap-3 justify-center">
                                    <span>
                                        <MapPin className="size-5 sm:size-8"></MapPin>
                                    </span>
                                    <span className="text-[#7A7A7A]">
                                        based in
                                    </span>
                                    <span> Bangladesh</span>
                                </div>
                            </section>
                        </section>
                    </motion.section>
                </section>
                <section className="hidden lg:block">
                    <span
                        style={textStyle}
                        className="absolute cursor-default min-h-max -top-15 right-0 shadow-xs rounded-full uppercase hidden sm:block font-light text-black/50"
                    >
                        <DecryptedText
                            text="frontend focused"
                            speed={50}
                            maxIterations={20}
                        />
                    </span>
                </section>
            </section>
            {/* bio and cta*/}
            <section className="w-full overflow-hidden">
                <motion.section
                    className="sm:w-7/12 mx-auto pt-3 text-center text-pretty"
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
                    <span className="text-sm text-[#7A7A7A]">
                        struggle.endure.contend.code()
                    </span>
                    <section className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-5 sm:pt-10">
                        <a href="#contact">
                            <GlareHover
                                className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                glareColor="#ffffff"
                                height="auto"
                                width="auto"
                                glareOpacity={3}
                                glareAngle={-30}
                                background="none"
                                glareSize={300}
                                borderRadius="9999px"
                                transitionDuration={1000}
                                playOnce={false}
                                style={{
                                    border: "2px solid #9e9e9e",
                                }}
                            >
                                <button className="bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1">
                                    Let's talk
                                </button>
                            </GlareHover>
                        </a>
                        <div className="flex items-center justify-center gap-5">
                            <a
                                href="https://github.com/code-shams"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="auto"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    glareSize={300}
                                    borderRadius="9999px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                    style={{
                                        border: "2px solid #9e9e9e",
                                    }}
                                >
                                    <button className="bg-black/5 px-1 py-1">
                                        <img
                                            src={github}
                                            className="w-4 sm:w-6"
                                            alt=""
                                        />
                                    </button>
                                </GlareHover>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/code-shams/"
                                target="_blank"
                            >
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="auto"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    border="5px"
                                    glareSize={300}
                                    borderRadius="9999px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                >
                                    <button className="bg-black/5 px-1 py-1">
                                        <img
                                            src={linkedin}
                                            className="w-4 sm:w-6"
                                            alt=""
                                        />
                                    </button>
                                </GlareHover>
                            </a>
                            <a href="https://wa.link/eameu6" target="_blank">
                                <GlareHover
                                    className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                    glareColor="#ffffff"
                                    height="auto"
                                    width="auto"
                                    glareOpacity={3}
                                    glareAngle={-30}
                                    background="none"
                                    border="5px"
                                    glareSize={300}
                                    borderRadius="9999px"
                                    transitionDuration={1000}
                                    playOnce={false}
                                >
                                    <button className="bg-black/5 px-1 py-1">
                                        <img
                                            src={whatsapp}
                                            className="w-4 sm:w-6"
                                            alt=""
                                        />
                                    </button>
                                </GlareHover>
                            </a>
                            <GlareHover
                                className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                                glareColor="#ffffff"
                                height="auto"
                                width="auto"
                                glareOpacity={3}
                                glareAngle={-30}
                                background="none"
                                border="5px"
                                glareSize={300}
                                borderRadius="9999px"
                                transitionDuration={1000}
                                playOnce={false}
                            >
                                <button className="bg-black/5 px-1 py-1">
                                    <a href="">
                                        <Download className="size-4 sm:size-6"></Download>
                                    </a>
                                </button>
                            </GlareHover>
                        </div>
                    </section>
                </motion.section>
            </section>
        </>
    );
};

export default Hero;
