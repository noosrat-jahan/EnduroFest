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
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Components/Dashboard';

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
            element: <PrivateRoute><Marathons></Marathons></PrivateRoute>
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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