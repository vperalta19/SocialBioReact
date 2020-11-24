import { useHistory } from "react-router";
import { login, registrar } from "../services/apiRoutes";

export default class UsuariosController {
	
	contructor(props){
        this._usuarioLogged = null;
	}

    async registrar(usuario){
        var validacion = false;
        const response = await registrar(usuario);
        if(response.status === 200) {
            validacion = true;
            sessionStorage.setItem('usuario',JSON.stringify(usuario));
            this._usuarioLogged = usuario;
        }
        return validacion
    }

    async getUsuarioLogged(){
        if (!this._usuarioLogged || !this._usuarioLogged.length)
		{
            this._usuarioLogged = JSON.parse(sessionStorage.getItem('usuario'))
			
		}
		return this._usuarioLogged;
    }

	
	async login(infoUsuario)
	{
        var validacion = false; 
        const response = await login(infoUsuario);
        
        if(response.status === 200){
            const json = await response.json();
            await sessionStorage.setItem('usuario',JSON.stringify(json[0]));
            console.log(sessionStorage.getItem('usuario'));
            this._usuarioLogged = json[0]
            validacion = true;
        }
			
		
		return validacion;
    }

    

}