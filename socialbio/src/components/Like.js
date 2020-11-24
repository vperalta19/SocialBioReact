import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import './../assets/css/Publicacion.css'
import { isLiked, crearLike } from "../services/apiRoutes";
import { GlobalContext } from "../controllers/Context";

export default class Like extends React.Component{
	static contextType = GlobalContext;
  	constructor(props){
		super();
		this.state={
			likes: '',
			isLiked: false,
			usuario: '',
			publicacion: ''
		}
	}

	async handleClick(){
		const like = {
			usuario: this.state.usuario,
			publicacion: this.state.publicacion
		}
		const response = await crearLike(like)
		if(response.status === 200){
			await this.setState({
				isLiked: !this.state.isLiked
			})
			if(this.state.isLiked){
				this.setState({
					likes: this.state.likes + 1
				})
			}
			else{
				this.setState({
					likes: this.state.likes - 1
				})
			}
		}
		
	}

	async componentDidMount(){
		const usuario = await this.context.UsuariosController.getUsuarioLogged()
		const user = usuario.usuario
		var like
		const response = await isLiked(user,this.props.publicacion)
		if(response.status === 200){
			like = true
		}
		else{
			like =false
		}
		this.setState({
			usuario: user,
			publicacion: this.props.publicacion,
			isLiked: like,
			likes: this.props.likes
		})
	}


  render(){
    return(
		
			<div className='row'>
				<div className='col text-right'>
					<span className='cantInteraccion'>{this.state.likes}</span>
				</div>
				<div className='col text-left'>
					<FontAwesomeIcon onClick={this.handleClick.bind(this)} className={'heart ' + (this.state.isLiked ? 'isLiked' : '')} icon={faHeart}/>
				</div>
			</div>
		
		
    )
  }
  
}