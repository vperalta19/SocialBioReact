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
import { GlobalContext } from '../controllers/Context'
import { Link } from 'react-router-dom'
import Image from 'cloudinary-react/lib/components/Image'
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext'


export default class Menu extends React.Component{
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            usuario: '',
            avatar: ''
        }
    }


    async componentDidMount(){
        const usuario = await this.context.UsuariosController.getUsuarioLogged()
        this.setState({
            nombre: usuario.nombre + ' ' + usuario.apellido,
            usuario: '@' + usuario.usuario,
            avatar: usuario.fotoPerfil
        })

    }
    render(){
        return(
            <div >
                <div className='col-2 menu'>
                    <div className='row'>
                        <div className='col'>
                            <img className='logo' src={logo} alt='logo'/>
                        </div>
                    </div>
                    <Link to='/Home'><div className="row text-left align-items-center hover">
                        <div className='col-xl-3 col icono'>
                            <FontAwesomeIcon icon={faHome}/>
                        </div>
                        <div className=' seccionMenu col-9'>
                            <div>INICIO</div>
                        </div>
                    </div></Link>
                    <Link to='/Perfil'><div className="row text-left align-items-center hover">
                        <div className='col-xl-3 col icono'>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className=' seccionMenu col-9'>
                            <div>PERFIL</div>
                        </div>
                    </div></Link>
                    <Link to='/Explorar'><div className="row text-left align-items-center hover">
                        <div className='col-xl-3 col icono'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                        <div className=' seccionMenu col-9'>
                            <div>EXPLORAR</div>
                        </div>
                    </div></Link>
                    <Link to='/Notificaciones'><div className="row text-left align-items-center hover">
                        <div className='col-xl-3 col icono'>
                            <FontAwesomeIcon icon={faBell}/>
                        </div>
                        <div className=' seccionMenu col-9'>
                            <div>NOTIFICACIONES</div>
                        </div>
                    </div></Link>
                    <Link to='/Perfil'><div className="row infoPerfil">
                        <div className='col-xl-2 col p-0'>
                            <CloudinaryContext cloudName="dai8fqtrr">
                                <Image publicId={this.state.avatar} secure="true" className='avatar' alt='imagen de perfil'/>
                            </CloudinaryContext>
                        </div>
                        <div className='col-10 perfil'>
                            <div className='nombre'>{this.state.nombre}</div>
                            <div className='usuario'>{this.state.usuario}</div>
                        </div>
                        
                    </div></Link>
                </div>
                <footer>
                    <div className='container'>
                        <div class="row menu-celular fixed-bottom align-items-center">
                            <div className='col '>
                                <Link to='Home'><FontAwesomeIcon className='icono' icon={faHome}/></Link>
                            </div>
                            <div className='col '>
                                <Link to='/Perfil'><FontAwesomeIcon className='icono' icon={faUser}/></Link>
                            </div>
                            <div className='col '>
                                <Link to='/CrearPublicacion'><FontAwesomeIcon className='icono' icon={faPlusCircle}/></Link>
                            </div>
                            <div className='col '>
                                <Link to='/Explorar'><FontAwesomeIcon className='icono' icon={faSearch}/></Link>
                            </div>
                            <div className='col '>
                                <Link to='/Notificaciones'><FontAwesomeIcon className='icono' icon={faBell}/></Link>
                            </div>
                            
                        </div>
                    </div>
                    
                </footer>
            </div>
            
        )
    }
}