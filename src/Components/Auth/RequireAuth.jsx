import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth({ allowedRoles }) {
    const { isloggedIn, role } = useSelector((state) => state.auth);
    // const location = useLocation();
    return isloggedIn && allowedRoles.find((myRole) => myRole == role) ? (
        <Outlet />
    ) : isloggedIn ? (<Navigate to="/denied" />) : (<Navigate to="login" />)

}

export default RequireAuth
