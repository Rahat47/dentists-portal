import React from "react";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
    return (
        <section className="my-5">
            <div className="container">
                <h4 className=" py-5 text-center text-info text-uppercase">
                    Our Doctors
                </h4>

                <div className="row">
                    <DoctorsCard key={1} />
                    <DoctorsCard key={2} />
                    <DoctorsCard key={3} />
                </div>
            </div>
        </section>
    );
};

export default Doctors;
