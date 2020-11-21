import React from 'react';
import './App.css';
import GlobalContextProvider, { GlobalContext } from './controllers/Context';
import	{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import InicioSesion from './pages/InicioSesion';
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import Registrarse from './pages/Registrarse';
import PublicacionCompleta from './pages/PublicacionCompleta';
import Perfil from './pages/Perfil';


export class App extends React.Component {
	static contextType = GlobalContext;

	render() {
		return (
			<GlobalContextProvider>
				<Router>
					<div className="fill App">
						<Switch>
              <Route path='/' exact component={Inicio} />
              <Route path='/InicioSesion'  component={InicioSesion} />
              <Route path='/Registrarse'  component={Registrarse} />
              <Route path='/Home'  component={Home} />
              <Route path='/PublicacionCompleta' component={PublicacionCompleta} />
              <Route path='/Perfil' component={Perfil} />
						</Switch>
					</div>
				</Router>
			</GlobalContextProvider>
		);
	}
}
