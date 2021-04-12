import React from "react";

const Heading = ({ headingSecond, headingPrime }) => {
    return (
        <div className="text-center m-4">
            <h4 className="text-primary text-uppercase">{headingSecond}</h4>
            <h1 className="pb-3">{headingPrime}</h1>
        </div>
    );
};

export default Heading;
