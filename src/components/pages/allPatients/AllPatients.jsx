import React, { useEffect, useState } from "react";
import { getAppointments } from "../../../API";
import Sidebar from "../dashboard/sidebar/Sidebar";
import AppointmentDataTable from "./AppointmentDataTable";

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function getAllAppointments() {
            try {
                const { data } = await getAppointments();
                setAppointments(data.appointments);
            } catch (error) {
                console.log(error.message);
            }
        }
        getAllAppointments();
    }, []);

    return (
        <div className="container-fluid row ">
            <Sidebar />
            <div
                className="col-md-10 p-4 pr-5"
                style={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "#F4FDFB",
                }}
            >
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;
