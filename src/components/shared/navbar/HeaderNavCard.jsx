import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faMarker,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const HeaderNavCard = ({ data }) => {
    return (
        <div className="col-md-4 d-flex">
            <div
                className={`p-4 ${
                    data.variant === "dark" ? "bg-dark" : "bg-primary"
                } rounded d-flex align-items-center`}
            >
                <div className="header-nav-icon pe-3">
                    {data.icon === "clock" && (
                        <FontAwesomeIcon icon={faClock} />
                    )}
                    {data.icon === "marker" && (
                        <FontAwesomeIcon icon={faMarker} />
                    )}
                    {data.icon === "tel" && (
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    )}
                </div>
                <div className="header-nav-content">
                    <h4 className="py-2 text-light">{data.title}</h4>
                    <p className="text-light">{data.message}</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavCard;
