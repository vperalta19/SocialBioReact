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
import SeleccionarImagen from "./components/SeleccionarImagen";
import SeguidoresYSeguidos from "./components/SeguidoresYSeguidos";
import NavBarSeguidoresYSeguidos from  "./components/NavBarSeguidoresYSeguidos";
import Usuario from './components/Usuario';

function App() {
  return (
    <div className="App">
      <div className="conteiner">
      <NavBar/>
        <div className="row">
          
          <div className="col-2">
            <Menu/>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10">
                <BioUsuario/>
              </div>
             
                <SeccionDerecha/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
