import React from "react";
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card mt-5 h-100">
                <div className="card-body">
                    <p className="card-text text-justify">
                        {testimonial.message}
                    </p>
                </div>
                <div className="d-flex p-4 align-items-center">
                    <img
                        src={testimonial.image}
                        className="img-fluid w-25"
                        alt=""
                    />
                    <h4 className="text-uppercase ps-3">{testimonial.name}</h4>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
