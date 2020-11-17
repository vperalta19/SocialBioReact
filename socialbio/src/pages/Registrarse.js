import React from 'react';


import {Link} from 'react-router-dom'

import Logo from "./../assets/img/logo.png"


import './../assets/css/Inicio.css'
import { GlobalContext } from '../controllers/Context';
import { Alert } from "@material-ui/lab";

export default class Registrarse extends React.Component{
  static contextType = GlobalContext;
  constructor(props){
    super(props);
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

    handleClick = async () => {
        const usuario = {
          nombre: this.state.nombre,
          apellido: this.state.apellido,
          usuario: this.state.usuario,
          email: this.state.email,
          contraseña: this.state.contraseña,
        }
        
        if(!usuario.nombre.length || !usuario.apellido.length || !usuario.email.length || !usuario.contraseña.length || !usuario.usuario.length ){
            this.setState({submit:true})
        }
        else{
            const validacion = await this.context.UsuariosController.registrar(usuario)
            if(validacion) {
                this.props.history.push("/Home")
            }
            else {this.setState({alert:true,alertDescripcion:'El usuario ya existe'})}
            
        }
    }
    
    render(){
        return(
          <div className="container-fluid fondo login">
            <div className='row'>
              <img className='m-3' src={Logo}  alt="logo Social Bio"/>
            </div>
            <div className='row h-75 align-items-center'>
              <div className='col-12 col-md-6 text-right'>
                {(() => {
                    if (this.state.alert){
                        return (
                            <Alert style={{width:'100%'}} variant="filled" severity="error">
                                {this.state.alertDescripcion}
                            </Alert>
                        )
                    }
                    
                    return null;
                })()}
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
                
                <Link to='/'><button className="btnNaranjaInvertido btnVolver">Volver</button></Link>
                <button className='btnVerde btnRegistrar' onClick={this.handleClick}>Registrar</button>
              </div>

            </div>
          </div>
        )
    }
}
