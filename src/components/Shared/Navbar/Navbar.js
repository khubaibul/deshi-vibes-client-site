import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import men from "../../../assets/Mens Menu.png"
import woMen from "../../../assets/Women Menu.png"
import kids from "../../../assets/Kids Menu.png"

const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    const changeNavbarContent = () => {
        if (window.scrollY >= 150) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    window.addEventListener("scroll", changeNavbarContent);


    const navLink = <>
        <div className='flex items-center gap-x-4 text-sm font-semibold'>
            {/* <select name="category" id="category">
                <option disabled selected value="">
                    <p>Shop</p>
                </option>
                <option value="mens" className='h-56' style={{ backgroundImage: `url(${men})` }
                }>
                    <div>
                        <img src={men} alt="" />
                    </div>
                </option>
            </select> */}
            <NavLink to="/store">Store</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink>Journal</NavLink>
        </div>
        <div>
            {
                scroll ? <NavLink to="/" className="text-2xl font-bebas text-primary">DV</NavLink>
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
            <NavLink to="/login" className="px-5 border border-primary hover:bg-primary text-primary hover:text-white transition-all active:bg-opacity-80 font-bebas tracking-wide">
                Login
            </NavLink>
        </div>
    </>
    return (
        <div className='flex justify-between px-24 py-3.5 sticky top-0 bg-white border-b border-gray-light z-50'>
            {navLink}
        </div>
    );
};

export default Navbar;