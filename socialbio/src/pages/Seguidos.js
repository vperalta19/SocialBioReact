import React from 'react';

import Menu from '../components/Menu'
import Usuario from '../components/Usuario'
import {seguidos} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';
import NavBar from '../components/NavBar';
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

  async componentDidMount(){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    const usuarios = await seguidos(user);
    this.setState({
      seguidos: usuarios,
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
                        <div className='col-12'>
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
                            
                            (this.state.seguidos) &&
                              this.state.seguidos.map(
                                
                                (value, index)=>{
                                    return(
                                        <Usuario key={index} infoUser={value}/>
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