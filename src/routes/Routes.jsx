import {createBrowserRouter} from "react-router";
import RootLayout from "../layout/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Blogs from "../pages/Blogs.jsx";
import Contact from "../pages/Contact.jsx";
import BookingDetails from "../pages/BookingDetails.jsx";
import Appoinment from "../components/Appoinment.jsx";
import Error from "../pages/Error.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                path: '/',
                Component: Home,
                loader:() => fetch('/fakeData.json')
            },
            {
                path: '/bookings',
                Component: Appoinment,
            },
            {
                path: '/blogs',
                Component:Blogs,
                loader:() => fetch('/blogsData.json')
            },
            {
                path: '/contact',
                Component: Contact
            } ,
            {

                path: '/doctor/:id',
                Component: BookingDetails,
                loader:() => fetch('/fakeData.json')
            },
            {
                path: '*',
                Component: Error
            }
        ]
    }
])

export default router