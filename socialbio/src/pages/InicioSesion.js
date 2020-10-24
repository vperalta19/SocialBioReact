import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./../assets/img/logo.png"
import './../assets/css/Inicio.css'

class Inicio extends React.Component{
    render(){
        return(
          <div className="container-fluid fondo login">
            <div className='row'>
              <img className='m-3' src={Logo}  alt="logo Social Bio"/>
            </div>
            <div className='row h-75 align-items-center'>
              <div className='col-12 col-md-6 text-right'>
                <h1>INICIAR SESION</h1>
                <div className='row'>
                  <div className='col text-center'>
                    <input type='email' placeholder='E-mail' className='inputLoginNaranja'></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input type='password' placeholder='Contraseña' className='inputLoginVerde'></input>
                  </div>
                </div>
                
                
                <button className="btnVerdeInvertido btnRegistrar">Volver</button>
                <button className='btnNaranja btnInicioSesion'>Iniciar Sesion</button>
              </div>

            </div>
          </div>
            

        )
    }
}
export default Inicio;