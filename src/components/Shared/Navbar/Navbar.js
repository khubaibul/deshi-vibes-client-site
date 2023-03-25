import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase/Firebase.config';
import { logout } from '../../../features/auth/authSlice';
import logo from "../../../assets/logo.png";
import menuClose from "../../../assets/close.png";
import hamBurger from "../../../assets/menu-burger.png";
import useIsAdmin from '../../../Hooks/IsAdmin/useIsAdmin';
import { useGetCartProductByEmailQuery } from '../../../features/products/productsSlice';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { isLoading, user, googleLoading, isError, error } = useSelector(state => state.auth);
    const { data: cartProducts } = useGetCartProductByEmailQuery(user?.email, { refetchOnMountOrArgChange: true, refetchOnFocus: true });
    const dispatch = useDispatch();

    const [isAdmin, isAdminLoading] = useIsAdmin(user?.email);
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
        <div className='flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center gap-x-4 gap-y-5 text-sm font-semibold'>
            <NavLink to="/store">Store</NavLink>
            <NavLink>Journal</NavLink>
        </div>
        <div className='hidden lg:block md:block'>
            {
                scroll ?
                    <NavLink to="/" className="text-2xl font-bebas text-primary">
                        <img src={logo} className="w-6" alt="" />
                    </NavLink>
                    : <NavLink to="/" className="text-2xl font-bebas text-primary">Deshi /  Vibes</NavLink>
            }
        </div>
        <div className='flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center gap-x-2 gap-y-5'>
            <NavLink to="/user-profile" className="text-xl">
                <AiOutlineUser />
            </NavLink>
            <NavLink to="/cart" className="text-xl relative mr-3">
                <span className='absolute -top-4 -right-3 text-sm bg-primary rounded-full w-5 h-5 flex justify-center items-center text-white'>{cartProducts?.length}</span>
                <BsCart2 />
            </NavLink>
            {
                isAdmin === "Admin" &&
                <NavLink to="/dashboard" className="px-5 border border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
                    Dashboard
                </NavLink>
            }
            {
                user?.uid ?
                    <button
                        onClick={() => handleSignOut()}
                        className="px-5 border text-start border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
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
        <div className='sticky top-0 z-50'>
            <div>
                <div className='lg:flex md:flex hidden justify-between px-24 py-3.5 bg-white border-b border-gray-light z-50'>
                    {navLink}
                </div>
                <div className='lg:hidden md:hidden ml-2'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={hamBurger} className="w-10" alt="" />
                    </button>
                </div>
            </div>
            {
                menuOpen &&
                <div className='lg:hidden md:hidden top-0 left-0 fixed h-full w-[70vw] transition-all ease-in-out duration-500 translate-y-0 z-10 p-4 backdrop-blur-[30px] text-primary'>
                    <div className='flex justify-start mt-8 mb-5 mr-2'>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            <img src={menuClose} className="w-7" alt="" />
                        </button>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        {navLink}
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;