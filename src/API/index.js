import axios from 'axios'

const appointmentAPI = "http://localhost:5000/appointments"
const doctorsAPI = "http://localhost:5000/doctors"

export const getAppointments = async () => {
    try {
        const { data } = await axios.get(appointmentAPI)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export const createAppointment = async (appointment) => {
    try {
        const { data } = await axios.post(appointmentAPI, appointment, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (error) {
        console.log(error.message)
    }
}


export const getAppointmentsByDate = async (date) => {
    try {
        const { data } = await axios.post(`${appointmentAPI}/byDate`, date, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data
    } catch (error) {
        console.log(error.message);
    }
}

export const addADcotor = async (doctorData) => {
    try {
        const { data } = await axios.post(doctorsAPI, doctorData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return data
    } catch (error) {
        console.log(error);
    }
}