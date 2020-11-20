import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import SeccionDerecha from '../components/SeccionDerecha'

import Publicacion from '../components/Publicacion'
import {getInicio} from '../services/apiRoutes'
import Popup from '../components/CrearPublicacion';
import { GlobalContext } from '../controllers/Context';

export default class App extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super();
    this.state = {
      publicaciones: [],
      open: false,
      categoria: ''
    }
  }

  setCategoria(categoria){
    this.setState({
      categoria: categoria
    })
  }

  togglePopup(){
    this.setState({
      open: !this.state.open
    })
  }

  async componentDidMount(){
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    const publi = await getInicio(user);
    this.setState({
      publicaciones: publi
    })
  }
  
  render(){
    return (
        <div className='container-fluid'>
          <div className="row">
            <div className='col'>
              <Menu></Menu>
            </div>
            <div className='col-xl-7 col-md-10 col-12 publicaciones'>
            <div className='d-none d-md-block'>
              <button className="btn btncrearpublicacion btn-sm mt-2" type="button" value="Crear Publicacion" onClick={this.togglePopup.bind(this)}>Crear Publicacion</button>
              {this.state.open && (
                <Popup handleClose={this.togglePopup.bind(this)}
                />
              )}
            </div>
              <CategoriasBtn categoriaFn={this.setCategoria.bind(this)}></CategoriasBtn>
              <div className='row'>
                <div className='col-12 publicaciones'>
                  {
                    this.state.publicaciones.map(
                      (value, index)=>{
                          return(
                              <Publicacion key = {index} publicacion = {value} uso='feed'/>
                          )
                      }
                    )
                  }
                </div>
              </div>
            </div>

            <div className='col-3'>
              {/* <SeccionDerecha></SeccionDerecha> */}
            </div>
          </div>
        </div>
      // </div> 
    );
  }

}