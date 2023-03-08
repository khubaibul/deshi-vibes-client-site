import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { isLoading, user } = useSelector(state => state.auth);

    const location = useLocation();

    if (isLoading) {
        return <div className='h-screen flex items-center justify-center'>
            <Loader />
        </div>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}></Navigate>

}

export default PrivateRoute;