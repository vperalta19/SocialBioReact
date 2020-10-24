import React from 'react';

import Logo from "./../assets/img/logo.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Inicio.css'

class Inicio extends React.Component{
    render(){
        return(
            <div className="container-fluid fondo login">
                <div className='row'>
                    <div className='col-12 col-md-6 text-center opciones'>
                        <img className='' src={Logo}  alt="logo Social Bio"/>
                        <p className=''>
                            En SocialBio creemos que el verdadero cambio empieza por uno, desde comer menos carnes hasta el 
                            reciclaje o el zero-waste, aqui compartimos un modo de vida sustentable en el que todos compartimos 
                            y nos ayudamos!
                        </p>
                        <button className='btnNaranja btnInicioSesion'>Iniciar Sesion</button>
                        <button className="btnVerde btnRegistrar">Registrarse</button>

                    </div>
                </div>
            </div>

        )
    }
}
export default Inicio;

//<button className='btnNaranja btnInicioSesion'>Iniciar Sesion</button>
//<button className="btnVerde btnRegistrar">Registrarse</button>