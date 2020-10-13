import React from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import logo from './../assets/img/logoblanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Menu.css';


export default function Menu(){
    return(
        <div>
            <div className='col-2 col-xl-3 menu'>
                <div className='row'>
                    <div className='col'>
                        <img className='logo' src={logo} alt='logo'/>
                    </div>
                </div>
                <div className="row text-left align-items-center hover">
                    <div className='col-xl-3 col icono'>
                        <FontAwesomeIcon icon={faHome}/>
                    </div>
                    <div className=' seccionMenu col-9'>
                        <div>INICIO</div>
                    </div>
                </div>
                <div className="row text-left align-items-center hover">
                    <div className='col-xl-3 col icono'>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>
                    <div className=' seccionMenu col-9'>
                        <div>PERFIL</div>
                    </div>
                </div>
                <div className="row text-left align-items-center hover">
                    <div className='col-xl-3 col icono'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className=' seccionMenu col-9'>
                        <div>EXPLORAR</div>
                    </div>
                </div>
                <div className="row text-left align-items-center hover">
                    <div className='col-xl-3 col icono'>
                        <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className=' seccionMenu col-9'>
                        <div>NOTIFICACIONES</div>
                    </div>
                </div>
                <div className="row infoPerfil">
                    <div className='col-xl-2 col p-0'>
                        <img src={Avatar} className='avatar' alt='imagen de perfil'></img>
                    </div>
                    <div className='col-10 perfil'>
                        <div className='nombre'>Manuel Belgrano</div>
                        <div className='usuario'>@jmbelgrano</div>
                    </div>
                    
                </div>
            </div>
            <footer>
                <div className='container'>
                    <div class="row menu-celular fixed-bottom align-items-center">
                        <div className='col '>
                            <FontAwesomeIcon className='icono' icon={faHome}/>
                        </div>
                        <div className='col '>
                            <FontAwesomeIcon className='icono' icon={faUser}/>
                        </div>
                        <div className='col '>
                            <FontAwesomeIcon className='icono' icon={faPlusCircle}/>
                        </div>
                        <div className='col '>
                            <FontAwesomeIcon className='icono' icon={faSearch}/>
                        </div>
                        <div className='col '>
                            <FontAwesomeIcon className='icono' icon={faBell}/>
                        </div>
                        
                    </div>
                </div>
                
            </footer>
        </div>
        
    )
}