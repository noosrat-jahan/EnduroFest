import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-200px)] my-10 mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='flex flex-col gap-3 col-span-1'>
                    <NavLink to="/dashboard/add-marathon" className='bg-lime-200 py-1 rounded-md'>Add Marathon</NavLink>
                    <NavLink to="/dashboard/my-marathon-list" className='bg-lime-200 py-1 rounded-md'>My Marathon List</NavLink>
                    <NavLink to="/dashboard/my-apply" className='bg-lime-200 py-1 rounded-md'>My Apply List</NavLink>
                </div>
                <div className='lg:col-span-3'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;