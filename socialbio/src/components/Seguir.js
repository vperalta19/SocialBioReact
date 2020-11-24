import React from "react";
import { GlobalContext } from "../controllers/Context";
import { isFollow, seguir } from "../services/apiRoutes";

export default class Seguir extends React.Component{
	static contextType = GlobalContext;
    constructor(props){
		super();
		this.state={
			follow: false,
			seguidor: '',
			seguido: ''
		}
	}

	async handleClick(){
		const response = await seguir(this.state.seguidor, this.state.seguido)
		if(response.status === 200){
			this.setState({
				follow: !this.state.follow
			})
		}
		
	}

	async componentDidMount(){
		const usuario = await this.context.UsuariosController.getUsuarioLogged()
		const seguidor = usuario.usuario
		var follow
		const response = await isFollow(seguidor,this.props.usuario)
		if(response.status === 200){
			follow = true
		}
		else{
			follow =false
		}
		this.setState({
			seguidor: seguidor,
			seguido: this.props.usuario,
			follow: follow
		})
	}
	render(){
		return(
		<div>
			<button onClick={this.handleClick.bind(this)} className={(this.state.follow) ? 'btnNaranjaInvertido botonSeguir' : 'btnNaranja botonSeguir'} style={{width: '90%', height: '20px', fontSize: '10px'}}>{(this.state.follow) ? 'Siguiendo' : 'Seguir'} </button>
		</div>
		)
	}
  
}