"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginRequest from "../interface/UserCredentials";
import './page.css';


export default function Auth() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginRequest: LoginRequest = {
        email: email,
        password: password
    }

    async function submit() {

        try {
            const response = await fetch('http://localhost:8080/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginRequest)
            });
            if (response.ok) {
                const data = await response.json();
                const role = data.user.roles;
        
                if(role ==='ADMIN'){
                    router.push('/home');
                }
                else 
                router.push('/auth')
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    return (

        <div className="d-lg-flex half">
            <div className="bg order-1 order-md-2" style={{ backgroundImage: "url('img/pc.jpg')" }}></div>

            <div className="contents order-2 order-md-1">

                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <h3>Bem-vindo(a) ao <strong>Login</strong></h3>
                            <p className="mb-4">Realize seu login para acessar nosso sistema</p>
                       
                                <div className="form-group first mb-3">
                                    <label htmlFor="username">E-mail</label>
                                    <input type="text" className="form-control mt-2" placeholder="Informe seu e-mail" id="username" 
                                    value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="form-group last mb-3">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" className="form-control mt-2" placeholder="Informe sua senha" id="password"
                                    value={password} onChange={e => setPassword(e.target.value)}  />
                                </div>

                                <div className="d-flex mb-5 align-items-center">

                                    <span className="ml-auto"><a href="#" className="forgot-pass">Esquece a senha?</a></span>
                                </div>
                                <div className="">

                                    <button type="submit" onClick={submit} className="btn btn-primary">Entrar</button>

                                </div>

                                <div className="d-flex mt-3 align-items-center justify-content-center">
                                    <span className="ml-auto">Não possui conta? <a href="/user" className="">Criar agora</a></span>
                                </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

}