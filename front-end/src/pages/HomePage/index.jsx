import React, {useState, useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/auth";

import { getUsers } from "../../services/api";


import './style.css'

function Home() {
    const { user, logout } = useContext(AuthContext)
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        (async () => {
            const response = await getUsers();
            console.log(response.data)
            setUsuarios(response.data)
            setLoading(false)
        })();
    },[setUsuarios, setLoading])

    const handleLogout = () => {
        logout();
    }

    if(loading) {
        return <div className="loading">Carregando Dados...</div>
    }

    return (
        <main className="home">
            <h1 className="titulo">Home Page</h1>
            <div className="container">
                <h3 className="bemvindo">Bem vindo <strong>{user.usuario}</strong></h3>
                <ul>
                    {usuarios.map((u)=>(
                        <li key={u._id}>
                            {u.usuario}
                        </li>
                    ))}
                </ul>
                <button onClick={handleLogout} className="sair">Sair</button>
            </div>
        </main>
    )
}

export default Home;