import React from "react";
import docimg from "../../../../images/cta.png";
const DoctorsCard = () => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    src={docimg}
                    className="card-img-top img-fluid w-75 m-auto"
                    alt="..."
                />
                <div className="card-body text-center">
                    <h5 className="card-title">Dr. Caudi</h5>
                    <p className="card-text">+61 452 200 126</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorsCard;
