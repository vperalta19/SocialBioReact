import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import '../assets/css/CrearPublicacion.css'
import Reciclaje from "./../assets/img/reciclaje.png"
import Tips from "./../assets/img/tips.png"
import Eventos from "./../assets/img/eventos.png"
import Experiencias from "./../assets/img/experiencias.png"
import './../assets/css/CategoriaBtns.css'
import { GlobalContext } from "../controllers/Context";
import { Alert } from "@material-ui/lab";
import './../assets/css/CategoriaBtns.css'
 
export default class Popup extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props);
    this.state = {
      categoria: '',
      descripcion: '',
      fileInputState: '',
      previewSource: '',
      selectedFile: null,
    }
  }

  setCategoria(categoria){
    this.setState({
        categoria: categoria
    })
    console.log(this.state.categoria)
  }
  

  comparacion(event){
      return (event.target.name === this.state.categoria)
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
  }

  handleFileInputChange = (e) => {
    const file = e.target.files[0];
    this.previewFile(file);
    this.setState({
      fileInputState: e.target.value,
      selectedFile: file
    })
  };

  previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          this.setState({
            previewSource: reader.result
          })
      };
  };

  handleSubmitFile = (e) => {
      e.preventDefault();
      if (!this.state.selectedFile) {
        this.uploadImage('');
      }
      else{
        const reader = new FileReader();
        reader.readAsDataURL(this.state.selectedFile);
        reader.onloadend = () => {
            this.uploadImage(reader.result);
        };
      }
      
  };

  uploadImage = async (base64EncodedImage) => {
      try {
        const usuario = await this.context.UsuariosController.getUsuarioLogged()
        const user = usuario.usuario;
        const publicacion = {
          imagen: base64EncodedImage, 
          descripcion: this.state.descripcion, 
          usuario: user, 
          seccion: this.state.categoria
        }
        const validacion = await this.context.PublicacionController.publicar(publicacion)
        if(validacion){
          this.setState({
            alert:true,
            alertType:'success',
            alertDescript: 'Publicacion subida con exito'
          })
          setTimeout(() => {
            this.props.handleClose();
            window.location.reload()
          }, 2000);
        }
        else{
          this.setState({
            alert:true,
            alertType:'error',
            alertDescript: 'Error al subir la publicacion, recuerde que tiene que ingresar una descripcion y/o una imagen'
          })
        }
        
          
      } catch (err) {
          console.error(err);
      }
  };

  render(){
    return (
          <div className="col-12 mt-2">
            <div className='row'>
              <button className='btnVerdeInvertido text-center' onClick={this.props.handleClose}><FontAwesomeIcon icon={faArrowLeft}/> Volver</button>
            </div>
            {(() => {
              
              if (this.state.alert){
                  return (
                      <Alert style={{width:'100%'}} variant="filled" severity={this.state.alertType}>
                          {this.state.alertDescript}
                      </Alert>
                  )
              }
              
              return null;
            })()}
            <div className='row mt-3'>
              <h5 className="titulosPublicacion" >Seleccione que tipo de publicación quieres crear</h5>
            </div>
            <div className='row m-0'>
              <div className="col m-1 p-0">
                {(() => {
                    if ('reciclaje'===this.state.categoria){
                        return (
                            <button className="btncategorias b  mt-2 seleccionado" name="reciclaje" onClick={()=>{this.setCategoria('reciclaje')}}><img className="imagen" src={Reciclaje} alt=""/><br/>Reciclaje</button>
                        )
                    }
                    else{
                        return (
                            <button className="btncategorias b  mt-2" name="reciclaje" onClick={()=>{this.setCategoria('reciclaje')}}><img className="imagen" src={Reciclaje} alt=""/><br/>Reciclaje</button>
                        )
                    }
                })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('tips'===this.state.categoria){
                            return (
                                <button className="btncategorias c  mt-2 seleccionado" name="tips" onClick={()=>{this.setCategoria('tips')}}><img className="imagenLuz" src={Tips} alt=""/><br/>Tips</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias c  mt-2" name="tips" onClick={()=>{this.setCategoria('tips')}}><img className="imagenLuz" src={Tips} alt=""/><br/>Tips</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('eventos'===this.state.categoria){
                            return (
                                <button className="btncategorias d  mt-2 seleccionado" name="eventos" onClick={()=>{this.setCategoria('eventos')}}><img className="imagen" src={Eventos} alt=""/><br/>Eventos</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias d  mt-2" name="eventos" onClick={()=>{this.setCategoria('eventos')}}><img className="imagen" src={Eventos} alt=""/><br/>Eventos</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('experiencias'===this.state.categoria){
                            return (
                                <button className="btncategorias e  mt-2 seleccionado" name="experiencias" onClick={()=>{this.setCategoria('experiencias')}}><img className="imagen" src={Experiencias} alt=""/><br/>Experiencias</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias e  mt-2" name="experiencias" onClick={()=>{this.setCategoria('experiencias')}}><img className="imagen" src={Experiencias} alt=""/><br/>Experiencias</button>
                            )
                        }
                    })()}
                </div>    
              </div>
            <div className="input-group">
                <textarea className="form-control mt-2" aria-label="With textarea" rows="5" placeholder="Escribe aqui.." name='descripcion' value={this.state.descripcion} onChange={this.handleChange}></textarea>
            </div>
            <div className="row m-2">
              <div className='col'>
                <input
                    id='subirImagen'
                    type="file"
                    name="image"
                    onChange={this.handleFileInputChange}
                    value={this.state.fileInputState}
                    className="subirImagen"
                />
              </div>    
              {this.state.previewSource && (
                  <img
                      src={this.state.previewSource}
                      alt="chosen"
                      style={{ width: '100%' }}
                  />
              )}
            </div>
            <div className='row'>
              <div className='col text-right'>
                <button className="btnNaranja publicar mt-5 mb-3" type="button" name="button"  onClick={this.handleSubmitFile}>Publicar</button>
              </div>
            </div>
            

          </div>
    );
  }
};
 
