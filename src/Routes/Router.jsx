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
import UpdateProfile from '../Components/UpdateProfile';
import MarathonDetails from '../Components/MarathonDetails';

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
        element: <PrivateRoute><Marathons></Marathons></PrivateRoute>,
        loader: ()=>fetch(`${import.meta.env.VITE_API_URL}/all-marathons`)
      },
      {
        path: '/all-marathons/:id',
        element: <PrivateRoute><MarathonDetails></MarathonDetails></PrivateRoute>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/all-marathons/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile></UpdateProfile>
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