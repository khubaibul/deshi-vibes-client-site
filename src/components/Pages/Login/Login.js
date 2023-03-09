import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import view from "../../../assets/view.png";
import hide from "../../../assets/hide.png";
import google from "../../../assets/google.png";
import { useDispatch, useSelector } from 'react-redux';
import { googleLogin, loginUser } from '../../../features/auth/authSlice';
import { toast } from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';
import { setStoreUser } from '../../../Hooks/StoreUser/setStoreUser';

const Login = () => {
    const [passVisible, setPassVisible] = useState(false);
    const { isLoading, user, googleLoading, isError, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        dispatch(loginUser({ email, password })).then(result => setStoreUser(result.payload))

        toast.success("Login Successful");
        navigate(from, { replace: true });
    }

    const handleGoogleLogin = () => {
        dispatch(googleLogin()).then(result => {
            if (result.payload.email) {
                setStoreUser(result.payload);
                toast.success("Login With Google Successful");
                navigate(from, { replace: true });
            }
        })
    }


    useEffect(() => {
        if (isError) {
            toast.error(error)
        }
    }, [isError, error]);

    return (
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0 mx-auto my-7 md:my-16">
            <div className="border border-primary shadow">
                <div className="flex justify-between">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-primary text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-primary active:bg-opacity-80 text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="p-10">
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email1" value="Your email" />
                            </div>
                            <input
                                name="email"
                                id="email1"
                                type="email"
                                className='w-full py-2 px-4 focus:outline-primary bg-gray-light'
                                placeholder="Your email"
                                required={true}
                            />
                        </div>
                        <div className='relative flex items-center'>
                            <div className="mb-2 block">
                                <label htmlFor="password" value="Your password" />
                            </div>
                            <input
                                name="password"
                                id="password"
                                type={passVisible ? "text" : "password"}
                                className='w-full py-2 px-4 focus:outline-primary bg-gray-light'
                                required={true}
                                placeholder="Your Password"
                            />
                            <p
                                onClick={() => setPassVisible(!passVisible)}
                                className='absolute right-2 z-50 cursor-pointer'>
                                {
                                    passVisible
                                        ? <img src={view} className="w-6" alt="" />
                                        : <img src={hide} className="w-6" alt="" />
                                }
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                            <input
                                className='accent-primary mt-1'
                                name="remember"
                                id="remember"
                                type="checkbox"
                            />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        {/* <div>
                            <h5>Admin Credential</h5>
                            <p className='text-sm'>Email: admin@gmail.com</p>
                            <p className='text-sm'>Pass: 03101999</p>
                        </div> */}
                        <button
                            type='submit'
                            className="bg-primary hover:bg-secondary active:bg-opacity-80 py-2 px-4 cursor-pointer font-medium text-white transition-all duration-300"
                        >
                            {
                                isLoading ? <Spinner borderColor={"primary"} />
                                    : "Login"
                            }
                        </button>
                    </form>
                    {isError && <small className="text-red mt-2">{error}</small>}
                    <div className="mt-8">
                        <button
                            onClick={handleGoogleLogin}
                            className="border border-primary p-2 rounded-sm hover:bg-primary text-primary hover:text-white active:bg-opacity-80 font-semibold  flex items-center justify-center gap-x-4 w-full transition-all duration-300"
                        >
                            {
                                googleLoading
                                    ?
                                    <img src={google} className="w-5 animate-spin" alt="" />
                                    :
                                    <div className='flex justify-center items-center gap-x-3'>
                                        <img src={google} className="w-5" alt="" />
                                        <h4>Login With Google</h4>
                                    </div>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;