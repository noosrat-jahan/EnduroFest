import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../Components/Home';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default Router;