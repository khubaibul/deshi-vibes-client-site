import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const MainLayouts = () => {
    return (
        <div>
            <div className='bg-black py-2.5'>
                <h5 className=' text-primary text-center text-sm font-bold tracking-tight'>Free shipping on orders over $200
                </h5>
            </div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;