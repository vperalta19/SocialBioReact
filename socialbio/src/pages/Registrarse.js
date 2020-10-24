import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {registrar} from './../services/apiRoutes'


import Logo from "./../assets/img/logo.png"
import Fondo from  "./../assets/img/fondoIyRcompu.jpg";
import './../assets/css/Inicio.css'

class Registrarse extends React.Component{
    constructor(props){
      super();
      this.state={
        nombre: '',
        apellido: '',
        usuario: '',
        email: '',
        contraseña: ''
      }
    }

    handleChange = (event) => {
      const {name, value} = event.target;
      this.setState({
        [name]: value
      })
    }

    handleClick = () => {
      const usuario = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        usuario: this.state.usuario,
        email: this.state.email,
        contraseña: this.state.contraseña,
      }
      registrar(usuario)
    }
    render(){
        return(
          <div className="container-fluid fondo login">
            <div className='row'>
              <img className='m-3' src={Logo}  alt="logo Social Bio"/>
            </div>
            <div className='row h-75 align-items-center'>
              <div className='col-12 col-md-6 text-right'>
                <h1>REGISTRAR</h1>
                <div className='row'>
                  <div className='col text-center'>
                    <input 
                      type='text' 
                      name='nombre' 
                      placeholder='Nombre' 
                      className='inputLoginVerde' 
                      value={this.state.nombre} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input 
                      type='text' 
                      name='apellido' 
                      placeholder='Apellido' 
                      className='inputLoginNaranja' 
                      value={this.state.apellido} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input 
                      type='text' 
                      name='usuario' 
                      placeholder='Usuario' 
                      className='inputLoginVerde' 
                      value={this.state.usuario} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input 
                      type='email' 
                      name='email' 
                      placeholder='E-mail' 
                      className='inputLoginNaranja' 
                      value={this.state.email} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input 
                      type='password' 
                      name='contraseña' 
                      placeholder='Contraseña' 
                      className='inputLoginVerde' 
                      value={this.state.contraseña} 
                      onChange={this.handleChange}>
                    </input>
                  </div>
                </div>
                
                
                <button className="btnNaranjaInvertido btnVolver">Volver</button>
                <button className='btnVerde btnRegistrar' onClick={this.handleClick}>Registrar</button>
              </div>

            </div>
          </div>
        )
    }
}
export default Registrarse;