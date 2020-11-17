import React from 'react'
import Avatar from './../assets/img/avatar.jpg'

import Like from './Like'
import Comentarios from './Comentarios'
import TresPuntitos from './TresPuntitos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'

import ImageLoader from 'react-image-file';


import imagen from '../assets/img/imagen-vectorial-compressor.jpg'
import './../assets/css/Publicacion.css';


export default class Publicacion extends React.Component{
    constructor(props){
        super()
        this.state={
            uso: props.uso,
            nombreUser: 'Juan Manuel Belgrano',
            user: 'jmbelgrano',
            textoCorto: false,
            comentarios: '50',
            likes: '10',
            descripcion: 'loremsdckbaiuawcsjkkandsbkj',
            imagen: {imagen},
            avatar: {imagen}
        }
    };

    textoCorto(){
        if (this.state.uso === 'sugerencia'){
            this.setState({
                uso: true
            })
        }
        else{
            this.setState({
                uso: false
            })
        }
    }

    componentDidMount(){
        this.textoCorto();
        
        // var {publicacion} = this.props;

        // var {uso} = this.props
        // this.setState({
        //     uso: uso,
        //     nombreUser: publicacion.Nombre + ' '+ publicacion.Apellido,
        //     user: '@'+publicacion.usuario,
        //     comentarios: publicacion.cantComentarios,
        //     likes: publicacion.cantLikes,
        //     descripcion: publicacion.descripcion,
        //     imagen: publicacion.imagen,
        //     avatar: publicacion.fotoPerfil
        // });
    }

    render(){
        return(
            <div>
                <div className='row publicacion'>
                    <div className='col-1 p-0 m-0'>
                        {(() => {
                            if (!this.state.avatar){
                                return (
                                    <ImageLoader file={this.state.avatar} className='avatar' alt='imagen de perfil'/>
                                )
                            }
                            else{
                                return (
                                    <ImageLoader file={imagen} className='avatar' alt='imagen de perfil'/>
                                )
                            }
                            
                        })()}
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
                            {/* {(() => {
                                if (!this.state.imagen){
                                    return ( */}
                                        <img src={imagen} className='imagen' alt='imagen'/>
                                    {/* )
                                }
                                
                                return null;
                            })()} */}
                            
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