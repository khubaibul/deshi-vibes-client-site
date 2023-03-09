import { createBrowserRouter } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import MainLayouts from "../Layouts/MainLayouts";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Cart from "../Pages/Cart/Cart";
import Customers from "../Pages/Customers/Customers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardOrders from "../Pages/DashboardOrders/DashboardOrders";
import DashboardProducts from "../Pages/DashboardProducts/DashboardProducts";
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
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path: "/user-profile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><DashboardLayouts /></PrivateRoute>,
                children: ([
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/dashboard/add-product",
                        element: <AddProduct />
                    },
                    {
                        path: "/dashboard/customers",
                        element: <Customers />
                    },
                    {
                        path: "/dashboard/products",
                        element: <DashboardProducts />
                    },
                    {
                        path: "/dashboard/orders",
                        element: <DashboardOrders />
                    },
                ])
            },
        ])
    }
])