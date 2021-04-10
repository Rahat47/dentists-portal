import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import HeaderNavCard from "./navbar/HeaderNavCard";
import "./home.scss";
import Heading from "../../utils/Heading";
const Home = () => {
    const navCardData = [
        {
            id: 1,
            icon: "clock",
            title: "Opening Hours",
            message:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            variant: "primary",
        },
        {
            id: 2,
            icon: "marker",
            title: "Visit Our Location",
            message: "Brooklyn, NY 10036, United States",
            variant: "dark",
        },
        {
            id: 3,
            icon: "tel",
            title: "Contact Us Now",
            message: "+000 123 456789",
            variant: "primary",
        },
    ];
    return (
        <>
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
            <Heading
                headingSecond="Our Services"
                headingPrime="Services We Provide"
            />
        </>
    );
};

export default Home;
