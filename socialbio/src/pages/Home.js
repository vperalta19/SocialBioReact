import React from 'react';


export default class App extends React.Component {
  // constructor(props){
  //   super();
  //   this.state = {
  //     inicio: []
  //   }
  // }

  // async getPublis(){
  //   const publi = await getInicio('vaperalta')
  //   this.setState({
  //     inicio: publi
  //   })
  // }

  // componentDidMount(){
  //   this.getPublis();
  // }
  
  render(){
    return (
      <div className="x">
        {/* {
          this.state.inicio.map(
              (value, index)=>{
                  return(
                    <Publicacion key={index} uso='feed' ></Publicacion>
                  )
              }
          )
        } 
        <div className='container-fluid'>
          <div className="row">
            <div className='col'>
              <Menu></Menu>
            </div>
            <div className='col-xl-7 col-md-10 col-12 publicaciones'>
              <Publicacion uso='feed'></Publicacion>
              <Publicacion uso='feed'></Publicacion>
              <Publicacion uso='feed'> </Publicacion>
            </div>

            <div className='col-3'>
              <SeccionDerecha></SeccionDerecha>
            </div>
          </div>
        </div>*/}
      </div> 
    );
  }

}