import React from "react";
import testimonialQuote from "../../../../images/testimonialQuote.svg";
import TestimonialCard from "./TestimonialCard";
import person1 from "../../../../images/person1.png";
import person2 from "../../../../images/person2.png";
import person3 from "../../../../images/person3.png";
const Testomonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Winson Herry",
            image: person1,
            message:
                "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            id: 2,
            name: "Winson Herry",
            image: person2,
            message:
                "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
        {
            id: 3,
            name: "Winson Herry",
            image: person3,
            message:
                "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        },
    ];
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4
                            className="text-uppercase"
                            style={{ color: "#6ACECE" }}
                        >
                            Testimonial
                        </h4>
                        <h1>What’s Our Patients Says</h1>
                    </div>
                    <div className="col-md-6">
                        <img
                            src={testimonialQuote}
                            className="d-block w-25 img-fluid ms-auto"
                            alt="Quote"
                        />
                    </div>
                </div>
                <div className="row">
                    {testimonials.map(testimonial => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testomonial;
