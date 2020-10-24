import React from 'react';
import './App.css';
import	{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import InicioSesion from './pages/InicioSesion';
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import PublicacionCompleta from './pages/PublicacionCompleta';

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Switch>
              <Route path='/' exact component={Inicio} />
              <Route path='/InicioSesion'  component={InicioSesion} />
              <Route path='/Registrarse'  component={Registrarse} />
              <Route path='/Home'  component={Home} />
              <Route path='/PublicacionCompleta' component={PublicacionCompleta} />
              
            </Switch>
          </div>
        </Router>
      </div> 
    );
  }

}