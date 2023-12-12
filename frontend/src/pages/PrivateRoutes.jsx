
import { Navigate } from 'react-router-dom';
import MainTemplate from './MainTemplate.jsx';

const PrivateRoutes = () => {
    const isAuthenticated = !!localStorage.getItem('accessToken');

    return (
        isAuthenticated ? <MainTemplate /> : <Navigate to='/login' />
    );
};

export default PrivateRoutes;
