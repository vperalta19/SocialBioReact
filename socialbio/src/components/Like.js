import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import './../assets/css/Publicacion.css'

export default class Like extends React.Component{
  constructor(props){
		super();
		this.state={
			isLiked: false
		}
	}

	handleClick(){
		this.setState({
			isLiked: !this.state.isLiked
		})
	}


  render(){
    return(
      <div>
        <FontAwesomeIcon onClick={this.handleClick.bind(this)} className={'heart ' + (this.state.isLiked ? 'isLiked' : '')} icon={faHeart}/>
      </div>
    )
  }
  
}