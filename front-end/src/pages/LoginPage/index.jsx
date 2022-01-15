import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import './style.css';


function LoginPage() {

    const { authenticated, login } = useContext(AuthContext);

    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        console.log("submit", { user, senha })
        login(user, senha)
    }


    return <main id="main">
        <section id="background-pg">
            <img src="./fachada-PGE.png" alt="fachada-PGE" id="fachada"/>
            <div className="contato">
                <p style={{fontSize: "1vw"}}>
                    <em style={{color: "#707070", fontSize: 11}}>Atendimento pelo Whatsapp</em>
                    <br />
                    <span>Segunda a Sexta, das 7h às 13h.</span>
                </p>
                <div className="contato-info">
                    <p>
                        <em>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912162" style={{color: "#707070", fontSize: 13, textDecoration: "none"}}>
                                (79) 99191-2162
                                <br />
                                <span style={{color: "#0263b0", fontStyle: "bold"}}>Suporte</span>
                            </a>
                        </em>
                    </p>
                </div>
                <div className="contato-info">
                    <p>
                        <em>
                            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912482" style={{color: "#707070", fontSize: 13, textDecoration: "none"}}>
                                (79) 99191-2482 
                                <br />
                                <span style={{color: "#0263b0", fontStyle: "bold"}}>Desenvolvimento</span>
                            </a>
                        </em>
                    </p>
                </div>
            </div>
        </section>
        <section id="login">
            <p>{String(authenticated)}</p>
            <div className="container-login">
                <img src="./logopg.png" alt="logo PG" />
                <br />
                <br />
                <fieldset>
                    <span className="span-form">Usuário</span>
                    <div className="form">
                        <input type="text" id="login-usuario" name="login-usuario" placeholder="Digite o usuário" value={user} onChange={(e) => setUser(e.target.value)}/>
                    </div>
                    <br />
                    <span className="span-form">Senha</span>
                    <div className="form">
                        <input type="password" id="login-senha" name="login-senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                </fieldset>
            </div>
            <input type="button" value="Entrar" id="btnEntrar" onClick={handleSubmit}/>
            <a>Esqueceu sua senha ou bloqueou seu usuário?</a>
        </section>
    </main>
}


export default LoginPage;