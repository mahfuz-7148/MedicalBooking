
import {toast, Zoom} from "react-toastify";


export const getBookings = () => {
    const bookings = localStorage.getItem('bookings')
    return bookings ? JSON.parse(bookings) : [];
}

export const addBookings = doctor => {
    const bookings = getBookings()
    const isExist = bookings.find(exist => exist.registrationNumber === doctor.registrationNumber)
    return isExist ?  toast.warn(`Already ${doctor.name} booked`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    }) : bookings.push(doctor);
    // console.log(bookings)
    toast.success(`Appointment scheduled for ${doctor.name} successfully`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    });
    localStorage.setItem('bookings', JSON.stringify(bookings))
}

export const removeBookings = id => {
    const bookings = getBookings()
    const remainingBookings = bookings.filter(removeAppoinment => removeAppoinment.registrationNumber !== id)
    localStorage.setItem('bookings', JSON.stringify(remainingBookings))
    toast.warn('Appointment canceled', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
    });
}
