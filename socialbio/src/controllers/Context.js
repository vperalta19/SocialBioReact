import React from 'react';
import UsuariosController from './UsuariosController';
import PublicacionController from './PublicacionController';

const globalState = {
	PublicacionController: new PublicacionController(),
	UsuariosController: new UsuariosController()
};

export const GlobalContext = React.createContext(globalState);
const GlobalContextProvider = (props) => {
	return (
		<GlobalContext.Provider value={globalState}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
