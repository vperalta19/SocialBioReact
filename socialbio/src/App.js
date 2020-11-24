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
import Explorar from './pages/Explorar';
import Seguidos from './pages/Seguidos';
import Seguidores from './pages/Seguidores';
import PerfilAjeno from './pages/PerfilAjeno';
import Notificaciones from './pages/Notificaciones';
import CrearPublicacion from './pages/CrearPublicacion';


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
							<Route path='/CrearPublicacion'  component={CrearPublicacion} />
							<Route path='/Notificaciones'  component={Notificaciones} />
							<Route path='/PerfilAjeno'  component={PerfilAjeno} />
							<Route path='/PublicacionCompleta' component={PublicacionCompleta} />
							<Route path='/Perfil' component={Perfil} />
							<Route path='/Seguidores' component={Seguidores} />
							<Route path='/Seguidos' component={Seguidos} />
							<Route path='/Explorar' component={Explorar} />
						</Switch>
					</div>
				</Router>
			</GlobalContextProvider>
		);
	}
}
