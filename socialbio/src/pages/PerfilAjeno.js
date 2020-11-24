import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import Publicacion from '../components/Publicacion'
import {getFeed, getFeedSeccion} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';
import BioUsuario from '../components/BioUsuario';
import NavBar from '../components/NavBar';
import Seguir from '../components/Seguir';
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

  async componentDidMount(){
    this.setState({cargando: true})
    const usuario = JSON.parse(sessionStorage.getItem('usuarioAjeno'))
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
                <div className='col-2 p-0 m-0 d-none d-md-block'>
                <Menu></Menu>
                </div>
                <div className='col'>
                  <NavBar></NavBar>
                      <div className='row'>
                        {(this.state.usuario)&&<BioUsuario usuario={this.state.usuario}></BioUsuario>}
                        <div className='col m-3 text-center'>
                            {(this.state.usuario)&&<Seguir usuario={this.state.usuario.usuario}></Seguir>}
                          
                          
                        </div>
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