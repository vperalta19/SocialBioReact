import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Inicio.css'
import Logo from "./../assets/img/logo.png"
import Fondo from  "./../assets/img/fondoIyRcompu.jpg";

class Inicio extends React.Component{
    render(){
        return(
            <div className="container" styles={{ backgroundImage:`url(${Fondo})` }}>
            <div className="row">
                <div className=" div col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                
                    <img className='logo mt-4' src={Logo}  alt="logo Social Bio"/>
                    <h1 className="registrarse col-12 ml-2 iniciosesion ior">BIENVENID@</h1>
                    <p className="texto mt-5">En SocialBio creemos que el verdadero cambio empieza por uno, desde comer menos carnes hasta el reciclaje o el zero-waste, aqui compartimos un modo de vida sustentable en el que todos compartimos y nos ayudamos!</p>

                <div class="btn-iniciarSesion col-12">
                    <a href="iniciarSesion.html" >INICIAR SESION</a>
                </div>   
                <div class="btn-registrarse col-12">
                    <a href="#">REGISTRARSE</a>
                </div>
                
                </div>
               
            </div>
    
        </div>

        )
    }
}
export default Inicio;