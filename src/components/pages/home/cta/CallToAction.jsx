import React from "react";
import cta from "../../../../images/cta.png";
import "./cta.scss";
const CallToAction = () => {
    return (
        <section className="section-cta ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <div className="cta-img">
                            <img
                                src={cta}
                                className="img-fluid w-75"
                                alt="Doctor"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-light d-flex justify-content-center align-items-center text-center flex-column">
                        <h4 className="my-4" style={{ color: "#6ACECE" }}>
                            APPOINTMENT
                        </h4>
                        <h1>Make an appointment Today</h1>
                        <p style={{ color: "#1CC7C1" }}>
                            It is a long established fact that a reader will be
                            distractedby the readable content of a page when
                            looking at its
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
