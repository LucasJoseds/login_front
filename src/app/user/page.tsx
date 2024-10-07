
"use client"

import { useState } from "react";
import User from "../interface/User";
import './page.css';

export default function UserCreate() {


const[user, setUser] = useState<User>({
    name:"",
    email:"",
    password:""
})

async function register() {

    const response = await fetch('http://localhost:8080/api/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}



    return (

        
    <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: "url('img/pc.jpg')" }}></div>

        <div className="contents order-2 order-md-1">

            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7">
                        <h3>Realize seu cadastro</h3>
                        <p className="mb-4">Informe seus dados para cadastrar no sistema</p>
                        <form action="#" method="post">
                            <div className="form-group first mb-3">
                                <label htmlFor="username">Nome *</label>
                                <input type="text" className="form-control mt-2" placeholder="Informe seu e-mail" id="username"
                                    value={user.name} onChange={e => setUser(prevUser => ({...prevUser,name: e.target.value}))} required/>
                            </div>
                            <div className="form-group last mb-3">
                                <label htmlFor="password">E-mail *</label>
                                <input type="text" className="form-control mt-2" placeholder="Informe sua senha" id="password"
                                    value={user.email} onChange={e => setUser(prevUser => ({...prevUser,email: e.target.value}))} required/>
                            </div>

                            <div className="form-group last mb-3">
                                <label htmlFor="password">Senha *</label>
                                <input type="password" className="form-control mt-2" placeholder="Informe sua senha" id="password"
                                    value={user.password} onChange={e => setUser(prevUser => ({...prevUser,password: e.target.value}))} required/>
                            </div>

                          

                            
                                <button type="submit" onClick={register} className="btn btn-primary">Cadastrar</button>

                     

                         

                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>);

}