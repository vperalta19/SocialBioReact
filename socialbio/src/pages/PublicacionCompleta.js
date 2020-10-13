import React from 'react';

import Menu from './../components/Menu'
import SeccionDerecha from './../components/SeccionDerecha'
import Publicacion from './../components/Publicacion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function publicacionCompleta() {
    return (
      <div>
        <div className='container-fluid'>
          <div className="row">
            <div className='col'>
              <Menu></Menu>
            </div>
            <div className='col-xl-7 col-md-10 col-12 publicaciones'>
                    <button className='btnVerdeInvertido text-center'><FontAwesomeIcon icon={faArrowLeft}/> Volver</button>
                    <Publicacion uso='publicacionCompleta'></Publicacion>

              
            </div>
  
            <div className='col-3'>
              <SeccionDerecha></SeccionDerecha>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  