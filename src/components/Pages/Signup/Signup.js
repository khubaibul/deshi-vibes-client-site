import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import view from "../../../assets/view.png";
import hide from "../../../assets/hide.png";
import google from "../../../assets/google.png";
import { useDispatch, useSelector } from 'react-redux';
import { createUser, googleLogin, updateUser } from '../../../features/auth/authSlice';
import { toast } from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';

const Signup = () => {
    const [passVisible, setPassVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { isLoading, user, googleLoading, isError, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const displayName = form.name.value;
        const password = form.password.value;
        dispatch(createUser({ email, password })).then(result => {
            console.log(result.payload.uid);
            if (result.payload.uid) {
                toast.success("Signup Successful")
            }

        })
    }


    const handleGoogleLogin = () => {
        dispatch(googleLogin());
    }


    useEffect(() => {
        if (!isLoading && user?.email) {
            navigate("/");
        }
    }, [isLoading, user?.email, navigate]);

    useEffect(() => {
        if (isError) {
            toast.error(error)
        }
    }, [isError, error]);


    return (
        <section className="lg:w-1/3 md:w-2/3 w-full px-4 lg:px-0 md:px-0  mx-auto my-7 md:my-16">
            <div className="border border-primary shadow">
                <div className="flex justify-between">
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-primary active:bg-opacity-80 text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive
                                ? `bg-primary text-center py-2 border-b border-b-primary text-white font-medium w-full`
                                : `text-center border-b  text-primary py-2 font-medium w-full`
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>

                <div className="p-10">
                    <form
                        onSubmit={handleSignUp}
                        className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="name" value="Full Name" />
                            </div>
                            <input
                                name="name"
                                id="name"
                                type="text"
                                className='w-full p-2 focus:outline-primary bg-gray-light'
                                placeholder="Full Name"
                                required={true}
                            />
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm text-primary'>
                                Select Your Image
                            </label>
                            <input
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                                className='w-full p-2 focus:outline-primary bg-gray-light'
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email" value="Your email" />
                            </div>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                className='w-full p-2 focus:outline-primary bg-gray-light'
                                placeholder="Your email"
                                required={true}
                            />
                        </div>
                        <div className='relative flex items-center'>
                            <div className="mb-2 block">
                                <label htmlFor="password" value="Your password" />
                            </div>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id="password"
                                type={passVisible ? "text" : "password"}
                                className='w-full p-2 focus:outline-primary bg-gray-light'
                                required={true}
                                placeholder="Create Password"
                            />
                            <p onClick={() => setPassVisible(!passVisible)} className='absolute right-2 z-50 cursor-pointer'>
                                {
                                    passVisible
                                        ? <img src={view} className="w-6 z-50" alt="" />
                                        : <img src={hide} className="w-6 z-50" alt="" />
                                }
                            </p>
                        </div>
                        <div className='relative flex items-center'>
                            <div className="mb-2 block">
                                <label htmlFor="password" value="Your password" />
                            </div>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                name="confirmPassword"
                                id="confirmPassword"
                                type={passVisible ? "text" : "password"}
                                className='w-full p-2 focus:outline-primary bg-gray-light'
                                required={true}
                                placeholder="Confirm Password"
                            />
                            <p onClick={() => setPassVisible(!passVisible)} className='absolute right-2 z-50 cursor-pointer'>
                                {
                                    passVisible
                                        ? <img src={view} className="w-6 z-50" alt="" />
                                        : <img src={hide} className="w-6 z-50" alt="" />
                                }
                            </p>
                        </div>
                        {
                            password !== confirmPassword && <p className='text-red-600 text-sm'>Password doesn't match.</p>
                        }
                        <button
                            disabled={password !== confirmPassword}
                            type='submit'
                            className="bg-primary hover:bg-secondary  active:bg-opacity-80 py-2 px-4 cursor-pointer font-medium text-white transition-all duration-300"
                        >
                            {
                                isLoading ? <Spinner borderColor={"white"} />
                                    : "Signup"
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

export default Signup;