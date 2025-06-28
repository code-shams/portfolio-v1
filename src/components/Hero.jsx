import React from "react";
import DecryptedText from "../libs/animation/DecryptedText";
import self from "../assets/self.png";
import { Code2Icon, Coffee, MapPin } from "lucide-react";
const Hero = () => {
    const textStyle = {
        textOrientation: "upright",
        writingMode: "vertical-rl",
        letterSpacing: "-3px",
    };
    return (
        <>
            <section className="flex justify-between relative">
                <section className="hidden sm:block">
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
                <section className="w-full flex justify-center">
                    <section>
                        {/* Intro section with name and pic */}
                        <div className="flex items-center justify-between">
                            <p className="text-5xl font-bold">
                                <span className="text-[#7A7A7A]">I'm </span>
                                <span className="w-max">Maksudur Rahman</span>
                            </p>
                            <div className="ml-3 border-4 rounded-full group w-25 overflow-hidden relative flex justify-center items-center">
                                <img
                                    src={self}
                                    className="w-full grayscale-50 group-hover:opacity-0 z-10 transition-all duration-300 ease-in-out delay-300"
                                    alt=""
                                />
                                <span className="absolute opacity-0 z-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-300 font-bold uppercase text-3xl">
                                    Shams
                                </span>
                            </div>
                            <span className="text-5xl font-bold text-[#7A7A7A]">
                                ,
                            </span>
                        </div>
                        {/* Designation */}
                        <section className="text-5xl font-bold">
                            <div className="flex items-center justify-center gap-3">
                                <Code2Icon size={40}></Code2Icon>
                                <span>MERN-Stack </span>
                                <span className="text-[#7A7A7A]">
                                    Developer
                                </span>
                            </div>
                        </section>
                        {/* location */}
                        <section className="pt-4 text-5xl font-bold">
                            <div className="text-center flex items-center gap-3 justify-center">
                                <span>
                                    <MapPin size={40}></MapPin>
                                </span>
                                <span className="text-[#7A7A7A]">based in</span>
                                <span> Bangladesh</span>
                            </div>
                        </section>
                    </section>
                </section>
                <section className="hidden sm:block">
                    <span
                        style={textStyle}
                        className="absolute cursor-default min-h-max -top-15 shadow-xs rounded-full uppercase hidden sm:block font-light text-black/50"
                    >
                        <DecryptedText
                            text="frontend focused"
                            speed={50}
                            maxIterations={20}
                        />
                    </span>
                </section>
            </section>
            {/* bio */}
            <section className="w-3/5 mx-auto text-center text-pretty text-[#7A7A7A] text-sm pt-4">
                <span className="">
                    Computer Science student, who finds purpose in
                    writing code, preferably with a cup of coffee nearby
                    <span className="text-2xl"> ☕.</span>
                </span>
            </section>
        </>
    );
};

export default Hero;
