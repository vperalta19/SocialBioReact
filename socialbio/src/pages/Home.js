import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import SeccionDerecha from '../components/SeccionDerecha'

import Publicacion from '../components/Publicacion'
import {getInicio, getInicioSeccion} from '../services/apiRoutes'
import Popup from '../components/CrearPublicacion';
import { GlobalContext } from '../controllers/Context';

import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props);
    this.state = {
      publicaciones: [],
      open: false,
      categoria: '',
      cargando: false
    }
  }

  async setCategoria(categoria){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    var publi = []
    if(categoria==='todo'){
      publi = await getInicio(user);
    }
    else{
      publi = await getInicioSeccion(user,categoria);
    }
    
    this.setState({
      categoria: categoria,
      publicaciones: []
    })
    this.setState({
      publicaciones: publi
    })

    this.setState({cargando: false})
    
  }

  togglePopup(){
    this.setState({
      open: !this.state.open
    })
  }

  perfilAjeno(){
    this.props.history.push("/PerfilAjeno")
  }

  async componentDidMount(){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    const publi = await getInicio(user);
    this.setState({
      publicaciones: publi
    })
    this.setState({cargando: false})
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
              <Link to='/CrearPublicacion'><button className="btn btncrearpublicacion btn-sm mt-2" type="button" value="Crear Publicacion" onClick={this.togglePopup.bind(this)}>Crear Publicacion</button></Link>
              
            </div>
              <CategoriasBtn categoriaFn={this.setCategoria.bind(this)}></CategoriasBtn>
              <div className='row'>
                <div className='col-12 publicaciones'>
                  {(() => {
                      if (this.state.cargando){
                          return (
                            <div className='row align-items-center'>
                              <div className='col text-center'>
                                <ReactLoading type='spinningBubbles' color='orange' height='64px' width='64px' className='cargando'/>
                              </div>
                            </div>
                            
                          )
                      }
                      
                      return null;
                  })()}
                  {
                    
                    (this.state.publicaciones) &&
                      this.state.publicaciones.map(
                        
                        (value, index)=>{
                            return(
                                <Publicacion key = {index} publicacion = {value} uso='feed' perfilAjeno={this.perfilAjeno.bind(this)}/>
                            )
                        }
                      )
                    
                  }
                </div>
              </div>
            </div>

            <div className='col-3'>
              <SeccionDerecha></SeccionDerecha>
            </div>
          </div>
        </div>
    );
    
  }

}