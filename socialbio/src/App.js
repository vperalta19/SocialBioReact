import React from 'react';
import './App.css';
import Menu from './components/Menu';
import SeccionDerecha from './components/SeccionDerecha';
import Publicacion from './components/Publicacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicacionCompleta from './pages/PublicacionCompleta';
import InicioSesion from './pages/InicioSesion';
import Inicio from './pages/Inicio';
import Registrarse from './pages/Registrarse';
import CategoriasBtn from "./components/CategoriasBtn";
import CrearPublicacion from "./components/CrearPublicacion";
import BioUsuario from './components/BioUsuario';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Inicio/>
    {/*  <Registrarse/>*/}
    {/*  <InicioSesion/>*/}
      {/* <PublicacionCompleta></PublicacionCompleta> */}
     {/*  <div className='container-fluid'>
        <div className="row">
          <div className='col-1'>
            <Menu></Menu>
          </div>
          <div className='col-12'>
          <NavBar/>  
          </div>
         </div>  
       
              
        
        <div className="row">
           <div className='col-xl-7 col-md-10 col-12 publicaciones'>
              <BioUsuario/>
              <CrearPublicacion/>
              <Publicacion uso='publicacionCompleta'></Publicacion>
              <Publicacion uso='feed'></Publicacion>
              <Publicacion uso='feed'> </Publicacion>
            </div>
           <div className=''>
              <SeccionDerecha></SeccionDerecha>
            </div>
          </div>
      </div>*/}
    </div>
  );
}

export default App;
