import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Home from './pages/HomePage';

import { AuthProvider, AuthContext } from './contexts/auth';


function AppRoutes() {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading) {
            return <div className="loading">Carregando...</div>
        }
        if(!authenticated) {
            return <Navigate to={'/'}/>
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<LoginPage />}/>
                    <Route exact path="/home" element={
                                                    <Private>
                                                        <Home />
                                                    </Private>}/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}


export default AppRoutes;