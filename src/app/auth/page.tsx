"use client"

import { useState } from "react";
import LoginRequest from "../interface/LoginUser/page";



export default function Auth() {

    const[email, setEmail] = useState("");
    const[password , setPassword] = useState("");

    const loginRequest : LoginRequest ={
        email:email,
        password:password
    }

    async function submit() {
        
        try {
            const response = await fetch('http://localhost:8080/auth',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(loginRequest)
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.token);
            }
            
        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div className="">

            <h1>Página de Login </h1>

            <div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>

                <button onClick={submit}>Entrar</button>
                <button>Cadastre-se</button>
            </div>



        </div>
    );

}