import React from "react";
import ServiceCard from "./ServiceCard";
const ServiceContainer = () => {
    const services = [
        {
            id: 1,
            title: "Fluoride Treatment",
            image: "service1",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo.  Quod, quo.",
        },
        {
            id: 2,
            title: "Cavity Filling",
            image: "service2",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo.  Quod, quo.",
        },
        {
            id: 3,
            title: "Teeth Whitening",
            image: "service3",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo.  Quod, quo.",
        },
    ];
    return (
        <div className="py-5 container">
            <div className="row">
                {services.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default ServiceContainer;
