import React from 'react';
import Popular from './../components/Popular'
import Sugerencias from './../components/Sugerencias'
import './../assets/css/Derecha.css';

export default function SeccionDerecha(){
    return(
        <div className='seccionDerecha'>
            <Popular></Popular>
            <Sugerencias></Sugerencias>
        </div>
    )
}