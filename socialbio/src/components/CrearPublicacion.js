import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/CrearPublicacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import CategoriasBtn from "./CategoriasBtn"

class CrearPublicacion extends React.Component{

    render(){
        return(    
             <div className="col-12 col-sm-12 col-md-12 col-lg-12 nuevaPublicacion mt-2">

               <button className="btn btneditar btn-sm d-inline btnvolver" type="button" name="button"> <FontAwesomeIcon icon={faArrowLeft}/>Volver</button>
                <h2 className="d-inline titulosPublicacion">Crear Publicación</h2>
                <h5 className="titulosPublicacion" >Seleccione que tipo de publicación quieres crear</h5>
                <CategoriasBtn/>
                <div className="input-group">
                    <textarea className="form-control mt-2" aria-label="With textarea" rows="5" placeholder="Escribe aqui.."></textarea>
                </div>
                <button className="btn btnseleccionar btn-sm mt-2 d-block" type="button" name="button">Seleccionar imágen o video</button>
                <button className="btn btnpublicar btn-sm  mt-5 mb-3" type="button" name="button">Publicar</button>

            </div>
            
            
        )
    }
}
export default CrearPublicacion;
