import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
    return (
        <div className="primary-font relative">
            {/* Grainy Background overlay */}
            <div className="grain-bg absolute inset-0 min-h-screen -z-10"></div>

            <header className="contain relative">
                <Navbar></Navbar>
            </header>
            <main className="pt-20 sm:pt-32">
                <section className="contain">
                    <Hero></Hero>
                </section>
                <section className="contain pt-15 sm:pt-28">
                    <About></About>
                </section>
            </main>
            <footer>
                <div className="min-h-screen"></div>
            </footer>
        </div>
    );
};

export default App;
