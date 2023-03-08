import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import logo from "../../../assets/logo.png";
import men from "../../../assets/Mens Menu.png"
import woMen from "../../../assets/Women Menu.png"
import kids from "../../../assets/Kids Menu.png"
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase/Firebase.config';
import { logout } from '../../../features/auth/authSlice';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const { isLoading, user, googleLoading, isError, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();



    const changeNavbarContent = () => {
        if (window.scrollY >= 150) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    window.addEventListener("scroll", changeNavbarContent);


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout())
            })
    }


    const navLink = <>
        <div className='flex items-center gap-x-4 text-sm font-semibold'>
            <NavLink to="/store">Store</NavLink>
            <NavLink>Journal</NavLink>
        </div>
        <div>
            {
                scroll ?
                    <NavLink to="/" className="text-2xl font-bebas text-primary">
                        <img src={logo} className="w-6" alt="" />
                    </NavLink>
                    : <NavLink to="/" className="text-2xl font-bebas text-primary">Deshi /  Vibes</NavLink>
            }
        </div>
        <div className='flex items-center gap-x-2'>
            <NavLink>
                <AiOutlineUser />
            </NavLink>
            <NavLink>
                <BsCart2 />
            </NavLink>
            <NavLink to="/dashboard" className="px-5 border border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
                Dashboard
            </NavLink>
            {
                user?.uid ?
                    <button
                        onClick={() => handleSignOut()}
                        className="px-5 border border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
                        Logout
                    </button>
                    :
                    <NavLink to="/login" className="px-5 border border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
                        Login
                    </NavLink>
            }
        </div>
    </>
    return (
        <div className='flex justify-between px-24 py-3.5 sticky top-0 bg-white border-b border-gray-light z-50'>
            {navLink}
        </div>
    );
};

export default Navbar;