import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/NavBar.css'
import {cantPublicaciones, cantSeguidores, cantSeguidos} from '../services/apiRoutes'
import { GlobalContext } from '../controllers/Context';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = {
            publicaciones: '',
            seguidores: '',
            seguidos: ''
        }
    }

    async componentDidMount(){
        const usuario = await this.context.UsuariosController.getUsuarioLogged();
        const user = usuario.usuario
        const {publicaciones} = (await cantPublicaciones(user))[0]
        const {seguidores} = (await cantSeguidores(user))[0]
        const {seguidos} = (await cantSeguidos(user))[0]
        this.setState({
            publicaciones: publicaciones,
            seguidores: seguidores,
            seguidos: seguidos
        })

    }
    
    render(){
        return(
            <div className='row align-items-center'> 
                <div className="col-12 navbar">
                    <ul className="headertop">
                        <li className="top p-2">
                            <Link to='/Perfil' className='top'>{this.state.publicaciones} Publicaciones</Link>
                        </li>
                        <li className="top p-2">
                            <Link to='/Seguidores' className='top'>{this.state.seguidores} Seguidores</Link>
                        </li>
                        <li className="top p-2">
                            <Link to='/Seguidos' className='top'>{this.state.seguidos} Siguiendo</Link>
                        </li>
                    </ul>
                </div>
            </div>
    

        )
    }
}
export default NavBar