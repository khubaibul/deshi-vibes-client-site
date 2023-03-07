import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductStore from "../Pages/ProductStore/ProductStore";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/store",
                element: <ProductStore />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ])
    }
])