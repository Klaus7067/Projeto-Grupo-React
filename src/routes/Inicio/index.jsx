import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

function Inicio() {
    return (
    <div className="container">
        <div className="container-login">
            <div className="wrap-login">
                <form className="login-form">
                    <span className="login-form-title">
                        Faça o login
                    </span>

                    <div className="wrap-input margin-top-35 margin-bottom-35" >
                        <input className="input-form" type="email" autoComplete='off' />
                        <span className="focus-input-form" data-placeholder="E-mail" ></span>
                    </div>

                    <div className="wrap-input margin-bottom-35">
                        <input className="input-form" type="password" />
                        <span className="focus-input-form" data-placeholder="Senha"></span>
                    </div>
                    <form className="btn-login-form" action="/home">
                    <div className="container-login-form-btn">
                            <input type="submit" className="login-form-btn"/>
                            Login
                    </div>
                    </form>

                    <ul className="login-utils">
                        <li className="margin-bottom-8 margin-top-8">
                            <a href="#" className="text2">
                                <span className="text1">
                                    Esqueceu sua senha ?
                                </span></a>

                        </li>

                        <li>
                            <span className="text1">
                                Não tem conta ?
                            </span>

                            <a href="#" className="text2">
                                Criar
                            </a>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
    
            )
};

export default Inicio;