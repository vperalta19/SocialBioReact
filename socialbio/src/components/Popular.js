import React from 'react'
import Usuario from './Usuario'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Derecha.css';

export default function Popular(){
    const usuario={
        nombreUser: 'Juan Manuel Belgrano',
        user: '@jmbelgrano'
    }
    return(
        <div className='row caja'>
            <div className='col'>
                <div className='row titulo'>
                    <div className='col'>
                        <span>Popular Hoy</span>
                    </div>
                    
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}