import React from "react";
import headerimg from "../../../../images/hero-back.png";
const Hero = () => {
    return (
        <main>
            <div
                style={{ height: "550px" }}
                className="row d-flex align-items-center"
            >
                <div className="col-md-4 offset-md-1">
                    <h1>
                        Your new smile <br /> starts here
                    </h1>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolores necessitatibus culpa voluptatibus,
                        corrupti aliquid
                    </p>
                    <button className="btn btn-primary text-uppercase">
                        Get Appointment
                    </button>
                </div>
                <div className="col-md-6 ms-auto">
                    <img
                        src={headerimg}
                        alt="Dentists chair.."
                        className="img-fluid"
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;
