import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import MainLayouts from "../Layouts/MainLayouts";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ProductStore from "../Pages/ProductStore/ProductStore";
import Signup from "../Pages/Signup/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/product-detail/:_id",
                element: <PrivateRoute><ProductDetails /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/user-profile",
                element: <UserProfile />
            },
            {
                path: "/dashboard",
                element: <DashboardLayouts />,
                children: ([
                    {
                        path: "/dashboard/add-product",
                        element: <AddProduct />
                    }
                ])
            },
        ])
    }
])