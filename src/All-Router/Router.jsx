import { createBrowserRouter } from "react-router-dom";
import Layout from "../Main-Layout/Layout";
import ErrorPage from "../All-Pages/ErrorPage";
import Home from "../All-Pages/Home";
import OurMenu from "../All-Pages/OurMenu";
import Dashboard from "../All-Pages/Dashboard";
import ContactUs from "../All-Pages/ContactUs";
import Order from "../All-Pages/Order";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/our-menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/dash-board',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            
            
        ]

    }
])

export default router