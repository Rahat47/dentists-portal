import React, { useState } from "react";
import Footer from "../../shared/Footer/Footer";
import AppointmentHeader from "./appointmentHeader/AppointmentHeader";
import BookAppointment from "./bookAppointment/BookAppointment";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    };
    return (
        <div className="container">
            <AppointmentHeader
                selectedDate={selectedDate}
                handleDateChange={handleDateChange}
            />
            <BookAppointment selectedDate={selectedDate} />

            <Footer />
        </div>
    );
};

export default Appointment;
