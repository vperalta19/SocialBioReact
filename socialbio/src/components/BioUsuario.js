import React from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/BioUsuario.css';

export default function BioUsuario(){

    const BioUser={
        nombreUser: 'Manuel Belgrano',
        user: '@jmbelgrano',
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiorehenderit in voluptate velit esse cillum dolore eu " 
    }
    return(
        <div className="col-12 ml-2">
        <div className='row'>
            <div className="col-12">
                <img src={Avatar} className='imagenUser' alt='imagen de perfil'></img>
            </div>
            <div className='col-8 p-0'>
                <div className='nombreUser'>{BioUser.nombreUser}</div>
                <p className='cuentaUser p-0 m-0'>{BioUser.user}</p>
            </div>
            <div className='col-4'>
            <button class=" btn btneditar btn-sm" type="button" name="button">Editar Perfil</button>
            </div>
            <div className='bioUser col-8 p-0 mt-1'>{BioUser.bio}</div>
        </div>
        <hr className="mt-4"width="100%" size="40" color="orange" noshade/> 
        </div>
    )
}