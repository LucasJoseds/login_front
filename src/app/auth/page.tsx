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

    return (

        <div className="">

            <h1>Página de Login </h1>

            <div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email"></input>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" id="password"></input>
                </div>
            </div>



        </div>
    );

}