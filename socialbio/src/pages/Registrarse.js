import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css'
import Logo from "./../assets/img/logo.png"
import Fondo from  "./../assets/img/fondoIyRcompu.jpg";

class Registrarse extends React.Component{
    render(){
        return(
            <div className="container" styles={{ backgroundImage:`url(${Fondo})` }}>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <form className="">
                      <img className='logomobile' src={Logo}  alt="logo Social Bio"/>
                      <h1 className="registrarse col-12 ml-2 iniciosesion ior">REGISTRARSE</h1>
                    <div className="form">
                     <span className="mt-1">Nombre</span><br/>
                     <input type="nombre" id="inputNombre" className="form-registrarNaranja mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                  </div>
                <div className="form">
                    <span>Apellido</span><br/>
                    <input type="apellido" id="inputApellido" className="form-registrarVerde mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                 </div>
                  <div className="form">
                    <span className="email">Email</span><br/>
                    <input type="email" id="inputEmail" className="form-registrarNaranja mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                  </div>
                  <div className="form">
                    <span className="contrasenia">Contraseña</span><br/>
                    <input type="password" id="inputContraseña" className="form-registrarVerde mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                  </div>
                <div class="form">
                    <span>Repetir contraseña</span><br/>
                    <input type="password" id="inputRepetirContraseña" className="form-registrarNaranja iniciarOregistrar" required="" autofocus=""/>
                </div>
                <div class="btn-registrar col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ml-5">
                    <a href="#">REGISTRARSE</a>
                </div>
                  </form>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ior oli">
                <img className='logoescritorio' src={Logo}  alt="logo Social Bio"/>
                </div>
            </div>
    
        </div>

        )
    }
}
export default Registrarse;