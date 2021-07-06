import React from 'react'
import Seguir from './Seguir'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Usuario.css';
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import Image from 'cloudinary-react/lib/components/Image';
import { getUsuario } from '../services/apiRoutes';

export default class Notificacion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombreUser: '',
            user: '',
            avatar: '',
            interaccion: ''
        }
    }

    async componentDidMount(){
        const usuario = await getUsuario(this.props.notificacion.usuarioInteraccion)
        this.setState({
            nombreUser: usuario.nombre + ' ' + usuario.apellido,
            user: usuario.usuario,
            avatar: usuario.fotoPerfil,
            interaccion: this.props.notificacion.interaccion
        })
        this.props.cargando()
    }

    render(){
        return(
            <div className='row user align-items-center'>
                <div className='col-3 p-0'>
                    <CloudinaryContext cloudName="dai8fqtrr">
                        <Image publicId={this.state.avatar} secure="true" className='avatar' alt='imagen de perfil'/>
                    </CloudinaryContext>
                </div>
                <div className='col-4 text-left'>
                    <div className='row nombreUsuario'>{this.state.nombreUser}</div>
                    <div className='row usuario'>{this.state.user}</div>
                </div>
                <div className='col-5 p-0 text-center'>
                    {(() => {
                      if (this.state.interaccion === 'like'){
                          return (
                            <span>le ha dado like a tu publicacion</span>
                            
                          )
                      }
                      else{
                        return (
                            <span>te ha comenzado a seguir</span>
                            
                          )
                      }
                  })()}
                </div>
            </div>
        )
    }
}