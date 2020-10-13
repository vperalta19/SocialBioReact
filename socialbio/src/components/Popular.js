import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Publicacion from './../components/Publicacion'
import './../assets/css/Derecha.css';

export default function Popular(){
    return(
        <div className='row caja'>
            <div className='col'>
                <div className='row titulo'>
                    <div className='col text-center'>
                        <span>Popular Hoy</span>
                    </div>
                    
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <Publicacion uso='sugerencia'></Publicacion>
                        <Publicacion uso='sugerencia'></Publicacion>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}