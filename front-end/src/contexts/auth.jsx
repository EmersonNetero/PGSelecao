import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const recoveredUser = localStorage.getItem('user')

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = (usuario, senha) => {

        const loggedUser = {
            id: '123',
            usuario,
        };

        localStorage.setItem('user', JSON.stringify(loggedUser))
    
        if (senha === 'secret'){
            localStorage.removeItem('user');
            setUser(loggedUser)
            navigate('/home')
        }
    }

    const logout = () => {
        console.log('logout')
        setUser(null);
        navigate("/");
    };
    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}