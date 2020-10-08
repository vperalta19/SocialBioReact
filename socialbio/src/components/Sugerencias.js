import React from 'react'
import Usuario from './Usuario'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Derecha.css';

export default function Sugerencias(){
    const usuario={
        nombreUser: 'Juan Manuel Belgrano',
        user: '@jmbelgrano'
    }
    return(
        <div className='row caja'>
            <div className='col'>
                <div className='row titulo'>
                    <div className='col'>
                        <span>Sugerencias</span>
                    </div>
                    
                </div>
                <div className='row align-items-center'>
                    <div className='col text-center'>
                        <Usuario></Usuario>
                        <Usuario></Usuario>
                        <Usuario></Usuario>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}