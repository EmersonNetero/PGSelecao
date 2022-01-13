import React from "react";
import './style.css';


function LoginPage() {
    return <main id="main">
        <section id="background-pg">
            <img src="./fachada-PGE.png" alt="fachada-PGE" id="fachada"/>
        </section>
        <section id="login">
            <div className="container-login">
                <img src="./logopg.png" alt="logo PG" />
                <fieldset>
                    <span className="span-form">Usuário</span>
                    <div className="form">
                        <input type="text" id="login-usuario" name="login-usuario" placeholder="Digite o usuário"/>
                    </div>
                    <br />
                    <span className="span-form">Senha</span>
                    <div className="form">
                        <input type="text" id="login-senha" name="login-senha" placeholder="Senha"/>
                    </div>
                </fieldset>
            </div>
        </section>
    </main>
}


export default LoginPage;