"use client"

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import LoginRequest from "../interface/UserCredentials";
import './page.css';


export default function Auth() {

    const router = useRouter();
  
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Formato de e-mail inválido").required("O e-mail é obrigatório"),
        password: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required("A senha é obrigatória")
    });

    const submit = async (values: { email: string, password: string }) => {
        const loginRequest: LoginRequest = {
            email: values.email,
            password: values.password
        };

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

                if (role === 'USER') {
                    router.push('/home');
                }
                else
                    router.push('/auth')
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <Formik 
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={submit}
            > 
            {() => (
                <Form>
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
                                            <Field type="email" name="email" className="form-control mt-2" placeholder="Informe seu e-mail" id="email" />
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group last mb-3">
                                            <label htmlFor="password">Senha</label>
                                            <Field type="password" name="password" className="form-control mt-2" placeholder="Informe sua senha" id="password" />
                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                        </div>

                                        <div className="d-flex mb-5 align-items-center">

                                            <span className="ml-auto"><a href="#" className="forgot-pass">Esquece a senha?</a></span>
                                        </div>
                                        <div className="">

                                            <button type="submit" className="btn btn-primary">Entrar</button>

                                        </div>

                                        <div className="d-flex mt-3 align-items-center justify-content-center">
                                            <span className="ml-auto">Não possui conta? <a href="/user" className="">Criar agora</a></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );

}