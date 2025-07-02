import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";

const App = () => {
    return (
        <div className="primary-font relative">
            <div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 1500,
                    }}
                />
            </div>
            {/* Grainy Background overlay */}
            <div className="grain-bg absolute inset-0 min-h-screen -z-10"></div>

            <header className="contain relative">
                <Navbar></Navbar>
            </header>
            <main className="pt-20 sm:pt-32">
                <section className="contain pt-8 sm:pt-0">
                    <Hero></Hero>
                </section>
                <section
                    id="about"
                    className="contain pt-15 sm:pt-28 scroll-mt-0"
                >
                    <About></About>
                </section>
                <section
                    id="stack"
                    className="contain pt-15 sm:pt-28 scroll-mt-0"
                >
                    <Stack></Stack>
                </section>
                <section
                    id="project"
                    className="contain pt-15 sm:pt-28 scroll-mt-0"
                >
                    <ProjectsContainer></ProjectsContainer>
                </section>
                <section
                    id="contact"
                    className="contain pt-15 sm:pt-28 scroll-mt-0 overflow-hidden"
                >
                    <Contact></Contact>
                </section>
            </main>
            <footer className="contain pb-3  pt-10 sm:pt-20 scroll-mt-0 overflow-hidden">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default App;
