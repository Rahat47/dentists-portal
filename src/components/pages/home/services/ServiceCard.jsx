import React from "react";
import service1 from "../../../../images/service1.png";
import service2 from "../../../../images/service2.png";
import service3 from "../../../../images/service3.png";
const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 d-flex">
            <div className="card py-2 text-center">
                <div className="w-25 m-auto">
                    {service.image === "service1" && (
                        <img
                            src={service1}
                            className="w-100 d-block my-4"
                            alt={service.title}
                        />
                    )}
                    {service.image === "service2" && (
                        <img
                            src={service2}
                            className="w-100 d-block my-4"
                            alt={service.title}
                        />
                    )}
                    {service.image === "service3" && (
                        <img
                            src={service3}
                            className="w-100 d-block my-4"
                            alt={service.title}
                        />
                    )}
                </div>
                <div className="card-body">
                    <h3 className="card-title my-4">{service.title} </h3>
                    <p className="card-text text-muted">{service.message}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
