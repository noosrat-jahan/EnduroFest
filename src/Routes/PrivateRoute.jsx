import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center w-32 mt-10 mx-auto'>
            <span className="loading loading-spinner text-accent"></span>
        </div>
    }
    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location?.pathname} to="/login"></Navigate>
};

export default PrivateRoute;