import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer';

const HomeLayout = () => {

    const navigation = useNavigation()

    return (
        <div className='font-montserrat'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-200px)]'>
                {
                    navigation.state === "loading" ?
                        <div className='flex justify-center'>
                            <span className=" loading loading-spinner text-pink-700 mt-10 w-10 mx-auto"></span>
                        </div>
                        : <Outlet></Outlet>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;