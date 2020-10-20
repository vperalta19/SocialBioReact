import React from 'react';
import './App.css';
import Menu from './components/Menu'
import SeccionDerecha from './components/SeccionDerecha'
import Publicacion from './components/Publicacion'
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicacionCompleta from './pages/PublicacionCompleta';

function App() {
  return (
    <div className="App">
      {/* <PublicacionCompleta></PublicacionCompleta> */}
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
      </div>
    </div>
  );
}

export default App;
