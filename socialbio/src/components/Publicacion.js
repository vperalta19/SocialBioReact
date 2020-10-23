import React from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import './../assets/css/Publicacion.css';
import Like from './Like'
import Comentarios from './Comentarios'
import TresPuntitos from './TresPuntitos'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faComment} from '@fortawesome/free-solid-svg-icons'


export default class Publicacion extends React.Component{
    constructor(props){
        super()
        var publicacion = this.props;
        this.state={
            uso: publicacion.uso,
            nombreUser: publicacion.nombreUser,
            user: publicacion.user,
            textoCorto: false,
            comentarios: publicacion.cantComentarios,
            likes: publicacion.cantLikes,
            descripcion: publicacion.descripcion,
            imagen: publicacion.imagen,
        }
    };

    textoCorto(){
        if (this.state.uso === 'sugerencia'){
            this.setState({
                uso: true
            })
        }
    }

    componentDidMount(){
        this.textoCorto();
    }

    render(){
        return(
            <div>
                <div className='row publicacion'>
                    <div className='col-1 p-0 m-0'>
                        <img src={Avatar} className='avatar' alt='imagen de perfil'></img>
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
                            <img src={Avatar} className='imagen' alt='imagen'/>
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