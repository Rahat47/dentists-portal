import axios from 'axios'

const appointmentAPI = "http://localhost:5000/appointments"

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