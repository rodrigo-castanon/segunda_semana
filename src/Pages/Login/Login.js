import React, { Component, Fragment } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends Component{
    render(){
        return(
            <Fragment>
            <div className="fundoo">
            <form className="formulario">
            <input className="campo"
             type="password"
            placeholder="senha"
           
            />
            </form>
            <Link to="/search">
            <button className="botao"><p>Login</p></button>
            </Link>
            </div>
            </Fragment>
        )
    }
}

export default Login;