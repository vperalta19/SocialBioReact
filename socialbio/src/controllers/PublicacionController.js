import { publicar } from "../services/apiRoutes";

export default class PublicacionController {
	

    async publicar(publicacion){
        var validacion = false;
        const response = await publicar(publicacion);
        if(response.status === 200) {
            validacion = true;
        }
        return validacion
    }

    

}