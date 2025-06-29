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
                    opacity: { duration: 2, ease: "easeInOut" },
                }}
                viewport={{ once: false }} // animate only once when in view
            >
                About Me
            </motion.h1>

            <motion.div
                className="mt-5 bg-black/5 p-2 sm:p-5 rounded-lg"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 8,
                    delay: 0.2,
                    opacity: { duration: 2, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
            >
                <p className="mx-auto text-left text-pretty text-sm sm:text-base text-[#7A7A7A]">
                    Computer Science student, who finds purpose in writing code,
                    preferably with a cup of coffee nearby ☕.
                    <br />
                    <br />
                    🔥 Currently, I'm engaged in MERN stack development -
                    exploring frontend technologies such as React, modern
                    component libraries, and UI/UX best practices, while also
                    diving into backend development, database design, and web
                    security. Thus, preparing myself to be a well-rounded
                    full-stack developer.
                    <br />
                    <br />
                    🚀 Future Plans: I plan to deepen my expertise in React and
                    Node.js, followed by exploring advanced technologies like
                    Next.js and TypeScript. Additionally, I aim to expand my
                    understanding of backend tools such as Docker, WebSockets,
                    and cloud services.
                    <br />
                    <br />
                    📚 Fun Fact: When I’m not coding, I’m usually deep into a
                    manga or book. Some day, I'd love to dive into Arduino
                    projects and build something fun.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
