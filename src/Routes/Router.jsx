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
import AddMarathon from '../Components/AddMarathon';

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/add-marathon",
        element: <PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
      }
    ]
  },
]);

export default Router;