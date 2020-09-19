import React from 'react'
import './../assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../assets/img/logoblanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'

export default function Menu(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col menulateral">

                    <img className='logoperfil  mb-4 mt-5' src={logo} alt="logo Social Bio"/>

                    <div className="row align-items-center">

                        <div className="col-2 pl-2">
                            <FontAwesomeIcon icon={faHome}/>
                            <FontAwesomeIcon icon={faUser}/>
                            <FontAwesomeIcon icon={faSearch}/>
                            <FontAwesomeIcon icon={faBell}/>
                        </div>

                        <div className="col-10 pl-2 pr-0">
                            <ul>
                                <li >Inicio</li>
                                <li >Perfil</li>
                                <li >Explorar</li>
                                <li >Notificaciones</li>
                            </ul>
                        </div>

                    </div>

                    <div className="nombrecuenta">
                        <img src="" alt=""/>
                        <p className="text-white m-0">Cuenta</p>
                        <p className="text-white m-0">Nombre</p>
                    </div>

                </div>

                

                

                </div>



    </div>



    /*MENU MOBILE
        <footer>
        <nav class="navbar fixed-bottom">
            <a href="#"><span class="fas fa-home"></span></a>
            <a href="#"><span class="fas fa-user"></span></a>
            <a href="#"><span class="fas fa-plus"></span></a>
            <a href="#"><span class="fas fa-search"></span></a>
            <a href="#"><span class="fas fa-bell"></span></a>
        </nav>
        </footer>
    </body>*/
    )
}