import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import SeccionDerecha from '../components/SeccionDerecha'

import Publicacion from '../components/Publicacion'
import {getInicio} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';
import BioUsuario from '../components/BioUsuario';
import NavBar from '../components/NavBar';

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
            <NavBar></NavBar>
            <div className="row">
                
                <div className='col'>
                <Menu></Menu>
                </div>
                <div className='col-xl-7 col-md-10 col-12 publicaciones'>
                
                <div className='row'>
                    <div className='col-12 '>
                        
                        <BioUsuario></BioUsuario>
                    </div>
                </div>
                </div>

                <div className='col-3'>
                {/* <SeccionDerecha></SeccionDerecha> */}
                </div>
            </div>
        </div>
    );
  }

}