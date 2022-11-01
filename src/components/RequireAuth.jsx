import { Outlet, Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { auth, currentUser } = useAuth();
    const location = useLocation();

    return (
        currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth