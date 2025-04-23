import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import router from "./routes/Routes.jsx";
import {ToastContainer, Zoom} from "react-toastify";

createRoot(document.getElementById('root')).render(
   <>
       <RouterProvider router={router} />
       <ToastContainer
           position="top-center"
           autoClose={2000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick={false}
           rtl={false}
           pauseOnFocusLoss={false}
           draggable={false}
           pauseOnHover={false}
           theme="dark"
           transition={Zoom}
       />

   </>
)
