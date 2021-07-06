import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import Popup from 'reactjs-popup';
import Publicacion from '../components/Publicacion'
import {getFeed, getFeedSeccion} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';
import BioUsuario from '../components/BioUsuario';
import NavBar from '../components/NavBar';
import EditarUsuario from '../components/EditarUsuario';
import ReactLoading from 'react-loading';
import '../assets/css/EditarUsuario.css'

export default class App extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super();
    this.state = {
      publicaciones: [],
      open: false,
      categoria: '',
      cargando: false,
      usuario: null,
      editarUsuario: false,
    }
  }

  async setCategoria(categoria){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    var publi = []
    if(categoria==='todo'){
      publi = await getFeed(user);
    }
    else{
      publi = await getFeedSeccion(user,categoria);
    }
    
    this.setState({
      categoria: categoria,
      publicaciones: [],
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

  openEditarUsuario() {
		this.setState({
			editarUsuario: true
		});
	}
	closeEditarUsuario() {
		this.setState({
			editarUsuario: false
		});
  }
  
  cerrarSesion(){
    sessionStorage.clear();
    this.props.history.push('/')

  }

  async componentDidMount(){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    const publi = await getFeed(user);
    this.setState({
      publicaciones: publi,
      usuario: usuario
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
              <div className='col-md-10 col-12'>
                  <NavBar></NavBar>
                      <div className='row'>
                        {(this.state.usuario)&&<BioUsuario usuario={this.state.usuario}></BioUsuario>}
                        <div className='col mt-3 text-center'>
                          <button className='btnVerdeInvertido botonEditar' onClick={this.openEditarUsuario.bind(this)}>Editar Perfil</button>
                          <Popup open={this.state.editarUsuario} onClose={() => {this.setState({ editarUsuario: false })}}>
                            <EditarUsuario
                              usuario={this.state.usuario}
                              closeFunc={() => {this.closeEditarUsuario()}}/>
                          </Popup>
                          <button className='btnNaranjaInvertido botonEditar cerrarSesion' onClick={this.cerrarSesion.bind(this)}>Cerrar Session</button>
                        </div >
                      </div>
                      

                      <hr className="mt-4"width="100%" size="40" color="orange" noshade/> 
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
                                        <Publicacion key = {index} publicacion = {value} uso='feed'/>
                                    )
                                }
                              )
                            
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
    );
  }

}