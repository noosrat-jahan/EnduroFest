import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Components/Home';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Marathons from '../Components/Marathons';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all-marathons',
            element: <Marathons></Marathons>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

export default Router;