import React from 'react';
import logo from '../assets/logo.svg';
import './Login.css';

export default function Login() {

  return (
    <div className="login-container">

      <form action="">
        <img src={logo} alt="Tindev" />
        <input
          type="text"
          placeholder="Digite seu usuário do gitHub" />
        <button type="submit">Enviar</button>
      </form>

    </div>



  );
}