import React from "react";
import "./home.scss";
import Heading from "../../shared/Heading";
import ServiceContainer from "./services/ServiceContainer";
import Feature from "./feature/Feature";
import CallToAction from "./cta/CallToAction";
import Header from "./header/Header";
import Testomonial from "./testimonials/Testomonial";
import Blog from "./blogs/Blog";
import Doctors from "./doctors/Doctors";
import Contact from "./contacts/Contact";
import Footer from "../../shared/Footer/Footer";
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
            <Header navCardData={navCardData} />
            <Heading
                headingSecond="Our Services"
                headingPrime="Services We Provide"
            />
            <ServiceContainer />
            <Feature />
            <CallToAction />
            <Testomonial />
            <Heading headingPrime="From Our Blog News" headingSecond="Blogs" />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
