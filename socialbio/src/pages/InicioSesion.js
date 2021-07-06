import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "./../assets/img/logo.png"
import './../assets/css/Inicio.css'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../controllers/Context';
import { Alert } from '@material-ui/lab';

export default class InicioSesion extends React.Component{
  static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = {
            email: '',
            contraseña: '',
            alert: false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        })
      }

      handleClick = async () => {
        const login = {
          email: this.state.email,
          contraseña: this.state.contraseña,
        }
        const validacion = await this.context.UsuariosController.login(login)
        
        if(validacion){
            this.props.history.push("/Home")
        }
        else{
            this.setState({
                alert: true
            })
            
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
                            <Alert variant="filled" severity="error">
                                Los datos no son correctos, por favor volvé a ingresarlos.
                            </Alert>
                        )
                    }
                    
                    return null;
                })()}
                <h1>INICIAR SESION</h1>
                
                <div className='row'>
                  <div className='col text-center'>
                    <input type='email' placeholder='E-mail' className='inputLoginNaranja' value={this.state.email} name='email' onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col text-center'>
                    <input type='password' placeholder='Contraseña' className='inputLoginVerde' value={this.state.contraseña} name='contraseña' onChange={this.handleChange}></input>
                  </div>
                </div>
                
                
                <Link to='/'><button className="btnVerdeInvertido btnRegistrar">Volver</button></Link>
                <button className='btnNaranja btnInicioSesion' onClick={this.handleClick.bind(this)}>Iniciar Sesion</button>
              </div>

            </div>
          </div>
            

        )
    }
}
