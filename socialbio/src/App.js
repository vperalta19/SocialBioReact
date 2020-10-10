import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Sugerencias from './components/Sugerencias'
import Popular from './components/Popular'
import Publicacion from './components/Publicacion'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className="row">
          <div className='col'>
            <Menu></Menu>
          </div>
          <div className='col-lg-6 col-md-10 col-12 mb-5'>
            <Publicacion></Publicacion>
            <Publicacion></Publicacion>
            <Publicacion></Publicacion>
          </div>

          <div className='col-3'>
            <Popular></Popular>
            <Sugerencias></Sugerencias>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
