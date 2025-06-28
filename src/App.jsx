import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="primary-font">
            {/* Grainy Background overlay */}
            <div className="grain-bg absolute inset-0 min-h-screen -z-10"></div>

            <header className="contain relative">
                <Navbar></Navbar>
            </header>
        </div>
    );
};

export default App;
