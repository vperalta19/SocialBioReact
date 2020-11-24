import React from 'react';

import Menu from '../components/Menu'
import CategoriasBtn from '../components/CategoriasBtn'
import SeccionDerecha from '../components/SeccionDerecha'

import Publicacion from '../components/Publicacion'
import {getExplorar, getExplorarSeccion} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';

import ReactLoading from 'react-loading';

export default class Explorar extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super();
    this.state = {
      publicaciones: [],
      open: false,
      categoria: '',
      cargando: false
    }
  }

  async setCategoria(categoria){
    this.setState({cargando: true})
    var publi = []
    if(categoria==='todo'){
      publi = await getExplorar();
    }
    else{
      publi = await getExplorarSeccion(categoria);
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

  async componentDidMount(){
    this.setState({cargando: true})
    const publi = await getExplorar();
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

            <div className='col-3'>
              <SeccionDerecha></SeccionDerecha>
            </div>
          </div>
        </div>
    );
    
  }

}