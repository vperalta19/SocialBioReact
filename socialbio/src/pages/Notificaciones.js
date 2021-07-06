import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import SeccionDerecha from '../components/SeccionDerecha'

import Notificacion from '../components/Notificacion'
import {notificaciones} from '../services/apiRoutes'
import Popup from '../components/CrearPublicacion';
import { GlobalContext } from '../controllers/Context';

import ReactLoading from 'react-loading';

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

  cargando(){
    this.setState({cargando: false})
  }

  async componentDidMount(){
    this.setState({cargando: true})
    const usuario = await this.context.UsuariosController.getUsuarioLogged();
    const user = usuario.usuario
    const noti = await notificaciones(user);
    this.setState({
      notificaciones: noti
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
                    
                    (this.state.notificaciones) &&
                      this.state.notificaciones.map(
                        
                        (value, index)=>{
                            return(
                                <Notificacion key={index} notificacion={value} cargando={this.cargando.bind(this)}></Notificacion>
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