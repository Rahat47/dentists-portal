import React from "react";
import dentalOpImg from "../../../../images/dentalOp.png";
const Feature = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img
                            src={dentalOpImg}
                            className="img-fluid"
                            alt="Dental Operation"
                        />
                    </div>
                    <div className="col-md-7">
                        <h1 className="py-4">
                            Exeptional Dental Care, on Your Terms
                        </h1>

                        <p className="lead text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Doloribus odio fugit doloremque nesciunt
                            itaque, eligendi deleniti dicta quae? Beatae ratione
                            sed nemo excepturi praesentium aspernatur culpa
                            corrupti in quisquam modi. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Deleniti laborum,
                            quasi provident doloremque quaerat tempore beatae
                            neque doloribus sint alias? Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Quidem saepe
                            delectus illum officiis quam, illo libero beatae
                            sed. Eaque enim possimus id consequatur cumque quam
                            ab debitis quod officiis eos.
                        </p>

                        <button className="btn btn-primary btn-lg px-5 py-3 my-4">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
