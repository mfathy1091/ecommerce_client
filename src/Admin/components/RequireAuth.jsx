import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    return (
        isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" state={{ from: location }} replace />
    )
}

export default RequireAuth