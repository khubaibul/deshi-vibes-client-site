import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../Shared/DashboardSidebar/DashboardSidebar';

const DashboardLayouts = () => {
    return (
        <div className='lg:flex'>
            <DashboardSidebar />
            <Outlet />
        </div>
    );
};

export default DashboardLayouts;