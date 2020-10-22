import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css'
import Logo from "./../assets/img/logo.png"

class Inicio extends React.Component{
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  <form className="">
                      <img className='logomobile' src={Logo}  alt="logo Social Bio"/>
                      <h1 className="registrarse col-12 ml-2 iniciosesion ior">INICIAR SESIÓN</h1>
                  <div className="form">
                    <span className="email">Email</span><br/>
                    <input type="email" id="inputEmail" className="form-registrarNaranja mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                  </div>
                  <div className="form">
                    <span className="contrasenia">Contraseña</span><br/>
                    <input type="password" id="inputContraseña" className="form-registrarVerde mb-2 iniciarOregistrar" required="" autofocus=""/><br/>
                  </div>
                  <div className="btn-iniciarSesion mt-5 ml-5">
                      <a href="#" >INICIAR SESIÓN</a>
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
export default Inicio;