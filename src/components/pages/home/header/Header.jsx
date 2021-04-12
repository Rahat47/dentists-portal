import React from "react";
import Hero from "../hero/Hero";
import HeaderNavCard from "../../../shared/navbar/HeaderNavCard";
import Navbar from "../../../shared/navbar/Navbar";

const Header = ({ navCardData }) => {
    return (
        <header className="site-header mb-5">
            <div className="container">
                <Navbar />
                <Hero />
                <div className="row d-flex">
                    {navCardData.map(data => (
                        <HeaderNavCard key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
