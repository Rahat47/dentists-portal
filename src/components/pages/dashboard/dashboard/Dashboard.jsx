import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Appointments from "../appointments/Appointments";
import { getAppointmentsByDate } from "../../../../API";

const Dashboard = () => {
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        height: "100%",
    };
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const [loading, setloading] = useState(false);
    const handleDateChange = date => {
        setSelectedDate(date);
    };

    useEffect(() => {
        async function getAppointments() {
            try {
                setloading(true);
                const date = {
                    date: selectedDate,
                };
                const data = await getAppointmentsByDate(date);
                setAppointments(data.appointments);
                setloading(false);
            } catch (error) {
                setloading(false);
                console.log(error);
            }
        }
        getAppointments();
    }, [selectedDate]);
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-5 my-5 d-flex justify-content-center">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
                <div className="col-md-5">
                    <Appointments
                        loading={loading}
                        appointments={appointments}
                    />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
