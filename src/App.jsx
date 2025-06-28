import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
            </main>
            <footer>
                <div className="min-h-screen"></div>
            </footer>
        </div>
    );
};

export default App;
