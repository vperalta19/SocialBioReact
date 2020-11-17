
import React, { Component } from "react";

class SeleccionarImagen extends Component {
  constructor(props) {
      super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
          <input 
         
          className="inputFile"
           type="file" 
           name="myImage" 
           onChange={this.onImageChange} 
          
           />
          <img src={this.state.image} height="500"/>
           
          </div>
        </div>
      </div>
    );
  }
}
export default SeleccionarImagen;