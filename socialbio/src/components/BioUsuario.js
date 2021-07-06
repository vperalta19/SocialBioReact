import React, { useState } from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/BioUsuario.css';
import { GlobalContext } from '../controllers/Context';
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import Image from 'cloudinary-react/lib/components/Image';

export default class BioUsuario extends React.Component{
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = {
            nombreUser: '',
            user: '',
            bio: '',
            fotoPerfil: ''
        }
    }

    async componentDidMount(){
        const usuario = this.props.usuario;
        this.setState({
            nombreUser: usuario.nombre + ' ' + usuario.apellido,
            user: '@' + usuario.usuario,
            bio: usuario.biografia,
            fotoPerfil: usuario.fotoPerfil
        })
    }

    render(){
        return(
            <div className="col-8 ml-5">
                <div className='row'>
                    <div className="col-12">
                        <CloudinaryContext cloudName="dai8fqtrr">
                            <Image publicId={this.state.fotoPerfil} secure="true" className='imagenUser' alt='imagen de perfil'/>
                        </CloudinaryContext>
                    </div>
                    <div className='col-8 p-0'>
                        <div className='nombreUser'>{this.state.nombreUser}</div>
                        <p className='cuentaUser p-0 m-0'>{this.state.user}</p>
                    </div>
                    <div className='col-4 text-right'>
                        
                    </div>
                    <div className='bioUser col-9 p-0 mt-1'>{this.state.bio}</div>
                </div>
                

            
            </div>
        )
    }
}