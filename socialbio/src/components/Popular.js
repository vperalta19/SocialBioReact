import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Publicacion from './../components/Publicacion'
import './../assets/css/Derecha.css';
import ReactLoading from 'react-loading';
import {popular} from '../services/apiRoutes'

export default class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            publicaciones : [],
            cargando: false
        }
    }

    async componentDidMount(){
        this.setState({cargando: true})
        const publi = await popular();
        this.setState({
          publicaciones: publi
        })
        this.setState({cargando: false})
      }
      
    render(){
        return(
            <div className='row caja'>
                <div className='col'>
                    <div className='row titulo'>
                        <div className='col text-center'>
                            <span>Popular Hoy</span>
                        </div>
                        
                    </div>
                    <div className='row align-items-center'>
                        <div className='col text-center'>
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
                                        <Publicacion key = {index} publicacion = {value} uso='sugerencia'/>
                                    )
                                }
                            )
                            
                        }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}