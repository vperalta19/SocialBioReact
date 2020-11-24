import React from 'react'
import Usuario from './Usuario'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Derecha.css';
import ReactLoading from 'react-loading';
import {sugerencias} from '../services/apiRoutes'

export default class Sugerencias extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usuarios : [],
            cargando: false
        }
    }

    async componentDidMount(){
        this.setState({cargando: true})
        const usuarios = await sugerencias();
        this.setState({
            usuarios: usuarios
        })
        this.setState({cargando: false})
      }

    render(){
        return(
            <div className='row caja'>
                <div className='col'>
                    <div className='row titulo'>
                        <div className='col text-center'>
                            <span>Sugerencias</span>
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
                                (this.state.usuarios) &&
                                this.state.usuarios.map(
                                    
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
        )
    }
}