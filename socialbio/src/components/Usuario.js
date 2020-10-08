import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Usuario.css';
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'

export default function Usuario(){
    const usuario={
        nombreUser: 'Manuel Belgrano',
        user: '@jmbelgrano'
    }
    return(
        <div className='row user align-items-center'>
            <div className='col-3 p-0'>
                <img src={Avatar} className='avatar' alt='imagen de perfil'></img>
            </div>
            <div className='col-5 text-left'>
                <div className='row nombreUsuario'>{usuario.nombreUser}</div>
                <div className='row usuario'>{usuario.user}</div>
            </div>
            <div className='col-4 p-0 text-center'>
                <button className='seguir'>Seguir</button>
            </div>
        </div>
    )
}