import React from 'react'
import Seguir from './Seguir'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Usuario.css';
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import Image from 'cloudinary-react/lib/components/Image';

export default class Usuario extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombreUser: props.infoUser.nombre + ' ' + props.infoUser.apellido,
            user: props.infoUser.usuario,
            avatar: props.infoUser.fotoPerfil
        }
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
                    <Seguir usuario={this.state.user}></Seguir>
                </div>
            </div>
        )
    }
}