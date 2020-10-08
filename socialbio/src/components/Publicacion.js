import React from 'react'
import Avatar from './../assets/img/imagen-vectorial-compressor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Publicacion.css';


export default function Publicacion(){
    const publicacion={
        nombreUser: 'Manuel Belgrano',
        user: '@jmbelgrano',
        img: './../assets/img/fondoIyRcelu.jpg'
    }
    return(
        <div>
            <div className='row publicacion'>
                <div className='col-1'>
                    <img src={Avatar} className='avatar' alt='imagen de perfil'></img>
                </div>
                <div className='col-11'>
                    <div className='row m-2'>
                        <div className='col p-0'>
                            <span className='nombre'>{publicacion.nombreUser} <span className='texto'>{publicacion.user}</span></span>
                        </div>
                        <div>
                            <span className='fecha'>05/10/2020</span>
                        </div>
                        
                    </div>   
                    <div className='row m-2'>
                        <span className='texto'>Eiusmod esse irure sint sint occaecat labore velit amet laboris dolore duis proident laboris pariatur. Sunt excepteur sunt dolore et minim duis consectetur amet voluptate elit eiusmod. Ad nulla aliqua sunt reprehenderit eiusmod incididunt. Anim amet mollit deserunt amet anim magna ea minim nostrud ex voluptate sint. Esse dolore id id laborum ut pariatur elit fugiat consectetur deserunt laboris. Dolor enim do elit cillum magna excepteur in minim velit elit et. Ullamco ipsum proident laborum nisi amet enim.</span>
                    </div>
                    <div className='row m-2'>
                        <img src={Avatar} className='imagen' alt='imagen'/>
                    </div>
                    <div className='row m-2'></div>
                </div>
            </div>
        </div>
        
    )
}