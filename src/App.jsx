import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
    return (
        <div className="primary-font">
            {/* Grainy Background overlay */}
            <div className="grain-bg absolute inset-0 min-h-screen -z-10"></div>

            <header className="contain relative">
                <Navbar></Navbar>
            </header>
            <main className="my-20 sm:my-32">
                <Hero></Hero>
            </main>
        </div>
    );
};

export default App;
