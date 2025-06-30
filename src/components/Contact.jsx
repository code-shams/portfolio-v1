import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import GlareHover from "../libs/animation/GlareHover/GlareHover";
import { MessageSquareCode, SearchCodeIcon, SendHorizonal } from "lucide-react";
import toast from "react-hot-toast";
const Contact = () => {
    // ?Social handler address text
    const [text, setText] = useState(".........");
    // ?event handler for change addresses;
    const handleAddress = (address) => {
        setTimeout(() => {
            setText(address);
        }, 100);
    };

    const message = useRef();
    const handleSend = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const msg = message.current.value;
        if (!msg) {
            toast.error("Please write down your message!", {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
            return;
        }

        toast("Sent! Looking forward to connecting.", {
            icon: "📬",
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });
    };
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-12 gap-7"
            initial={{ x: 200, opacity: 0 }}
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
            {/* Email form */}
            <form
                onSubmit={handleSend}
                className="sm:col-span-5 min-h-60 border border-[#9e9e9e] rounded-2xl bg-sky-50/50 p-2 sm:p-5 space-y-2 sm:space-y-5"
            >
                {/* title */}
                <div>
                    <h1 className="text-lg sm:text-3xl font-light">
                        Let's talk
                    </h1>
                    <p className="text-xs text-[#7A7A7A]">
                        I'd be happy to apply my skills to your needs. Drop a message to learn more about how I can contribute.
                    </p>
                </div>

                {/* email input */}
                <div>
                    <p>
                        <span className="text-rose-400">const </span>
                        <span className="font-light">email = </span>
                    </p>
                    <input
                        name="email"
                        className="bg-black/5 w-full rounded-sm p-1 text-sm"
                        type="email"
                    />
                </div>

                {/* message textbox */}
                <div>
                    <p>
                        <span className="text-rose-400">const </span>
                        <span className="font-light">message = </span>
                    </p>
                    <textarea
                        ref={message}
                        rows={5}
                        className="resize-none bg-black/5 w-full rounded-sm p-1 text-sm"
                        name="message"
                        id=""
                    ></textarea>
                </div>

                {/* send btn */}
                <div className="w-max ml-auto">
                    <button type="submit" className="group overflow-hidden">
                        <GlareHover
                            className="hover:shadow-lg transition-all duration-300"
                            glareColor="#ffffff"
                            height="auto"
                            width="auto"
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
                            <span className="relative bg-black/5 px-2 text-sm py-1 sm:text-base sm:px-4 sm:py-1 flex items-center gap-2">
                                <span className="pr-5 sm:pr-10">Send</span>
                                <span className="absolute left-[70%] sm:left-[60%] transition-all duration-500 group-hover:translate-x-6 group-hover:scale-125">
                                    <SendHorizonal size={18}></SendHorizonal>
                                </span>
                            </span>
                        </GlareHover>
                    </button>
                </div>
            </form>

            {/* Socials */}
            <div className="sm:col-span-7 flex flex-col gap-5 min-h-60">
                <div className="h-max border border-[#9e9e9e] rounded-2xl bg-sky-50/50 p-2 sm:p-5 sm:pb-8 space-y-2 sm:space-y-5">
                    {/* Title */}
                    <h1 className="text-lg sm:text-3xl font-light flex items-center gap-1">
                        <MessageSquareCode className="size:4 sm:size-6"></MessageSquareCode>
                        Hit me up on
                    </h1>

                    {/* Social Address */}
                    <p className="text-xs sm:text-base">{text}</p>
                    {/* Icons */}
                    <div className="flex gap-4">
                        {/* Gmail */}
                        <div
                            onMouseEnter={() =>
                                handleAddress("dev.maksudur.rahman@gmail.com")
                            }
                            className="cursor-pointer group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center"
                        >
                            <img
                                className="w-8 sm:w-12 h-8 sm:h-12 p-1 sm:p-2 bg-black/5 border border-[#9e9e9e] rounded-full"
                                src="https://img.icons8.com/fluency/96/gmail-new.png"
                                alt=""
                            />
                            <span className="bg-black/5 px-2 absolute -bottom-7 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                Gmail
                            </span>
                        </div>

                        {/* Whatsapp */}
                        <div
                            onMouseEnter={() =>
                                handleAddress("WhatsApp: +880 1729 30 4005")
                            }
                            className="cursor-pointer group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center"
                        >
                            <img
                                className="w-8 sm:w-12 h-8 sm:h-12 p-1 sm:p-2 bg-black/5 border border-[#9e9e9e] rounded-full"
                                src="https://img.icons8.com/color/96/whatsapp--v1.png"
                                alt=""
                            />
                            <span className="bg-black/5 px-2 absolute -bottom-7 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                WhatsApp
                            </span>
                        </div>

                        {/* Phone */}
                        <div
                            onMouseEnter={() =>
                                handleAddress("Phone: +880 1729 30 4005")
                            }
                            className="cursor-pointer group hover:-translate-y-2 transition-all duration-300 relative flex flex-col justify-center items-center"
                        >
                            <img
                                className="w-8 sm:w-12 h-8 sm:h-12 p-1 sm:p-2 bg-black/5 border border-[#9e9e9e] rounded-full"
                                src="https://img.icons8.com/flat-round/96/phone.png"
                                alt=""
                            />
                            <span className="bg-black/5 px-2 absolute -bottom-7 rounded-full scale-0 group-hover:scale-80 transition-all duration-300">
                                Phone
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-max border border-[#9e9e9e] rounded-2xl bg-sky-50/50 p-2 sm:p-5 space-y-2 sm:space-y-5">
                    {/* title */}
                    <h1 className="text-lg sm:text-3xl font-light flex items-center gap-1">
                        <SearchCodeIcon className="size:4 sm:size-6"></SearchCodeIcon>
                        Find me on
                    </h1>

                    {/* icons */}
                    <div className="flex items-center">
                        {/* linkedin */}
                        <a
                            className="cursor-pointer group hover:-translate-y-2 transition-all duration-300"
                            href="https://www.linkedin.com/in/code-shams/"
                            target="_blank"
                        >
                            <img
                                className="w-16 sm:w-20 h-16 sm:h-20"
                                src="https://img.icons8.com/3d-fluency/375/linkedin--v2.png"
                                alt=""
                            />
                        </a>
                        
                        {/* github */}
                        <a
                            className="cursor-pointer group hover:-translate-y-2 transition-all duration-300"
                            href="https://github.com/code-shams"
                            target="_blank"
                        >
                            <img
                                className="w-16 sm:w-20 h-16 sm:h-20"
                                src="https://img.icons8.com/3d-fluency/375/github.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
