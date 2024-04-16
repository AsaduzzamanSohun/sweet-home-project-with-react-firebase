import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PropertyDetail from "../Pages/PropertyDetail/PropertyDetail";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('estates.json')
            },
            {
                path: "/update-profile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: '/:id',
                element: <PropertyDetail></PropertyDetail>,
                loader: () => fetch('estates.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
])


export default router;