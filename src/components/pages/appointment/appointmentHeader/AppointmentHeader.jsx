import React from "react";
import Navbar from "../../../shared/navbar/Navbar";
import headerimg from "../../../../images/hero-back.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentHeader = ({ selectedDate, handleDateChange }) => {
    return (
        <header className="container">
            <Navbar />
            <main>
                <div
                    style={{ height: "550px" }}
                    className="row d-flex align-items-center"
                >
                    <div className="col-md-4 offset-md-1">
                        <h1>Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            minDate={new Date()}
                        />
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
        </header>
    );
};

export default AppointmentHeader;
