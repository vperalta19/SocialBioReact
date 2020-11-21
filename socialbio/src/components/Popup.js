import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/CrearPublicacion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import CategoriasBtn from "./CategoriasBtn"
import SeleccionarImagen from "./SeleccionarImagen";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        
        <div className="nuevaPublicacion mt-2">
               <button className="btn btneditar btn-sm d-inline btnvolver" onClick={props.handleClose} type="button" name="button"> <FontAwesomeIcon icon={faArrowLeft}/>Volver</button>
                <h2 className="d-inline titulosPublicacion">Crear Publicación</h2>
                <h5 className="titulosPublicacion" >Seleccione que tipo de publicación quieres crear</h5>
                <CategoriasBtn/>
                <div className="input-group">
                    <textarea className="form-control mt-2" aria-label="With textarea" rows="5" placeholder="Escribe aqui.."></textarea>
                </div>
                <SeleccionarImagen/>
                
                <button className="btn btnpublicar btn-sm  mt-5 mb-3" type="button" name="button">Publicar</button>

            </div>
      </div>
    </div>
  );
};
 
export default Popup;