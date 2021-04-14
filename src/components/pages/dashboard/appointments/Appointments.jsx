import React from "react";
import AppointmentShortList from "./AppointmentShortList";

const Appointments = ({ appointments, loading }) => {
    return (
        <div>
            <h2 className="text-info text-center">Appointments</h2>
            {appointments.length ? (
                <AppointmentShortList appointments={appointments} />
            ) : (
                <div className="p-5">
                    {loading && (
                        <div className="d-flex justify-content-center">
                            <div
                                className="spinner-border text-info"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    )}
                    {!loading && (
                        <h4 className="lead text-center">
                            No Appointments for this Date
                        </h4>
                    )}
                </div>
            )}
        </div>
    );
};

export default Appointments;
