import React from 'react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {

    const navigation = useNavigation()

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-200px)] dark:bg-black my-10 mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='flex flex-col gap-3 col-span-1 shadow-md text-center font-bold text-lg font-roboto p-5 justify-center h-max rounded-md'>
                    <NavLink to="/dashboard/add-marathon" className='bg-amber-100 py-1 rounded-md btn text-xl'>Add Marathon</NavLink>
                    <NavLink to="/dashboard/my-marathon-list" className='bg-amber-100 py-1 rounded-md'>My Marathon List</NavLink>
                    <NavLink to="/dashboard/my-apply-list" className='bg-amber-100 py-1 rounded-md'>My Apply List</NavLink>
                </div>
                <div className='lg:col-span-3'>
                    {
                        navigation.state === "loading" ?
                            <div className='flex justify-center'>
                                <span className=" loading loading-spinner text-pink-700 mt-10 w-10 mx-auto"></span>
                            </div>
                            : <Outlet></Outlet>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;