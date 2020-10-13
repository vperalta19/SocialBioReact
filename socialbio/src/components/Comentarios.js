import React from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import './../assets/css/Publicacion.css';

export default function Comentario(){
    const publicacion={
        nombreUser: 'Manuel Belgrano',
        user: '@jmbelgrano'
    };
    return(
        <div>
            <div className='row'>
                <div className='col-1 p-0 m-0'>
                    <img src={Avatar} className='avatar' alt='imagen de perfil'></img>
                </div>
                <div className='col-11 '>
                    <div className='row m-2'>
                        <div className='col p-0'>
                            <span className='nombre'>{publicacion.nombreUser} <span className='texto'>{publicacion.user}</span></span>
                        </div>
                    </div>   
                    <div className='row m-2'>
                        <span className='texto '>Eiusmod esse irure sint sint occaecat labore velit amet laboris dolore duis proident laboris pariatur. Sunt excepteur sunt dolore et minim duis consectetur amet voluptate elit eiusmod. </span>
                    </div>
                </div>
            </div>
        </div>
    )
}