import React from "react";

export default class Seguir extends React.Component{
    constructor(props){
		super();
		this.state={
			follow: false
		}
	}

	handleClick(){
		this.setState({
			follow: !this.state.follow
		})
	}


  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)} className={(this.state.follow) ? 'btnNaranjaInvertido' : 'btnNaranja'}>{(this.state.follow) ? 'Siguiendo' : 'Seguir'}</button>
      </div>
    )
  }
  
}