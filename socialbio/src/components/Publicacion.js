import React from 'react'
import {Image} from 'cloudinary-react';

import Like from './Like'
import Comentarios from './Comentarios'
import TresPuntitos from './TresPuntitos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import { browserHistory } from 'react-router';

import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import { Link } from 'react-router-dom';
import { getUsuario } from '../services/apiRoutes';
import { GlobalContext } from '../controllers/Context';
import './../assets/css/Publicacion.css';


export default class Publicacion extends React.Component{
    static contextType = GlobalContext;
    constructor(props){
        super(props)
        this.state={
            uso: '',
            nombreUser: '',
            user: '',
            textoCorto: false,
            comentarios: '',
            likes: '',
            descripcion: '',
            imagen: '',
            avatar: '',
            idPublicaciones: '',
            seccion: '',
            color:''
        }
    };

    textoCorto(){
        if (this.state.uso === 'sugerencia'){
            this.setState({
                textoCorto: true
            })
        }
        else{
            this.setState({
                textoCorto: false
            })
        }
    }

    async setPerfilAjeno(){
        const usuario = await getUsuario(this.props.publicacion.usuario)
        sessionStorage.setItem('usuarioAjeno',JSON.stringify(usuario))
        this.props.perfilAjeno()
    }

    componentDidMount(){
        var {publicacion} = this.props;
        var {uso} = this.props
        var color ='';
        if(publicacion.seccion === 'reciclaje'){
            color = 'b'
        }
        else if(publicacion.seccion === 'tips'){
            color = 'c'
        }
        else if(publicacion.seccion === 'eventos'){
            color = 'd'
        }
        else if(publicacion.seccion === 'experiencias'){
            color = 'e'
        }
        this.setState({
            uso: uso,
            idPublicaciones: publicacion.idPublicaciones,
            nombreUser: publicacion.nombre + ' ' + publicacion.apellido,
            user: '@'+ publicacion.usuario,
            comentarios: publicacion.cantComentarios,
            likes: publicacion.cantLikes,
            descripcion: publicacion.descripcion,
            imagen: publicacion.imagen,
            avatar: publicacion.fotoPerfil,
            seccion: publicacion.seccion,
            color: color
        });

        
        this.textoCorto();
    }

    render(){
        return(
            <div>
                <div className={'row publicacion '+this.state.color}>
                    <div className='col-1 p-0'>
                        <CloudinaryContext cloudName="dai8fqtrr" onClick={this.setPerfilAjeno.bind(this)} style={{cursor:'pointer'}}>
                            <Image publicId={this.state.avatar} secure="true" className='avatar' alt='imagen de perfil'/>
                        </CloudinaryContext>

                    </div>
                    <div className='col-11'>
                        <div className='row m-2'>
                            <div className='col p-0'>
                                <span className='nombre'>{this.state.nombreUser} <span>{this.state.user}</span></span>
                            </div>
                            
                            
                        </div>   
                        <div className='row m-2'>
                            <span className={'texto ' + (this.state.textoCorto ? 'textoCorto' : '') }>{this.state.descripcion}</span>
                        </div>
                        

                        
                        
                    </div>
                    <div className='col-12'>
                        <div className='row m-2'>
                            <div className='col text-center'>
                                {(() => {
                                    if (!!this.state.imagen){
                                        return (
                                            <CloudinaryContext cloudName="dai8fqtrr">
                                                <Image publicId={this.state.imagen} secure="true" className='imagen'/>
                                            </CloudinaryContext>
                                        )
                                    }
                                    
                                    return null;
                                })()}
                            </div>
                            
                            
                            
                        </div>
                        {(() => {
                            if (!this.state.textoCorto){
                                return (
                                    <div className='row p-0 interacciones'>
                                        <div className='col'></div>
                                        <div className='col text-right'>
                                            <Like publicacion={this.state.idPublicaciones} likes={this.state.likes}/>
                                        </div>   
                                    </div>
                                )
                            }
                            
                            return null;
                        })()}
                    </div>
                    
                    
                </div>
            </div>
            
        )
    }
}