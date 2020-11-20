import React from 'react'
import {Image} from 'cloudinary-react';

import Like from './Like'
import Comentarios from './Comentarios'
import TresPuntitos from './TresPuntitos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'



import imagen from '../assets/img/imagen-vectorial-compressor.jpg'
import './../assets/css/Publicacion.css';
import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';


export default class Publicacion extends React.Component{
    constructor(props){
        super()
        this.state={
            uso: '',
            nombreUser: '',
            user: '',
            textoCorto: false,
            comentarios: '',
            likes: '',
            descripcion: '',
            imagen: '',
            avatar: ''
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

    componentDidMount(){
        var {publicacion} = this.props;
        var {uso} = this.props
        
        this.setState({
            uso: uso,
            nombreUser: publicacion.nombre + ' ' + publicacion.apellido,
            user: '@'+ publicacion.usuario,
            comentarios: publicacion.cantComentarios,
            likes: publicacion.cantLikes,
            descripcion: publicacion.descripcion,
            imagen: publicacion.imagen,
            avatar: publicacion.fotoPerfil
        });
        
        this.textoCorto();
    }

    render(){
        console.log(this.state.avatar)
        return(
            <div>
                <div className='row publicacion'>
                    <div className='col-1 p-0 m-0'>
                    <CloudinaryContext cloudName="dai8fqtrr">
                        <Image publicId={this.state.avatar} secure="true" className='avatar' alt='imagen de perfil'/>
                    </CloudinaryContext>
                    </div>
                    <div className='col-11 '>
                        <div className='row m-2'>
                            <div className='col p-0'>
                                <span className='nombre'>{this.state.nombreUser} <span className='texto'>{this.state.user}</span></span>
                            </div>
                            
                                {(() => {
                                    if (!this.state.textoCorto){
                                        return (
                                            <div className= 'd-none d-md-block'>
                                                <TresPuntitos></TresPuntitos>
                                            </div>
                                        )
                                    }
                                    return null;
                                })()}
                            
                            
                        </div>   
                        <div className='row m-2'>
                            <span className={'texto ' + (this.state.textoCorto ? 'textoCorto' : '') }>{this.state.descripcion}</span>
                        </div>
                        <div className='row m-2'>
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

                        {(() => {
                            if (!this.state.textoCorto){
                                return (
                                    <div className='row p-0 interacciones'>
                                        <div className='col-md-8 col-7'></div>
                                        
                                        <div className='col-2'>
                                            <span className='cantInteraccion'>{this.state.comentarios}</span><br/>
                                            <Like/>
                                        </div>
                                        <div className='col-2 text-center'>
                                            <span className='cantInteraccion'>{this.state.likes}</span><br/>
                                            <FontAwesomeIcon className='comment' icon={faComment}/>
                                        </div>
                                    </div>
                                )
                            }
                            
                            return null;
                        })()}
                        
                    </div>
                    {(() => {
                            if (this.state.uso === 'publicacionCompleta'){
                                return (
                                    <div className='col-12'>
                                        <Comentarios/>
                                        <Comentarios/>
                                        <Comentarios/>
                                        <Comentarios/>
                                        <Comentarios/>
                                    </div>
                                )
                            }
                            
                            return null;
                        })()}
                    
                </div>
            </div>
            
        )
    }
}