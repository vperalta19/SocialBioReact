export const popular = async () =>{
    try {
        const response = await fetch('http://localhost:3500/popular/');
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const sugerencias = async (usuario) =>{
    try {
        const response = await fetch('http://localhost:3500/sugerencias/'+usuario);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getInicio = async (usuario) =>{
    try {
        const response = await fetch('http://localhost:3500/inicio/'+usuario);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getInicioSeccion = async (usuario,seccion) =>{
    try {
        const response = await fetch('http://localhost:3500/inicio/'+usuario+"/"+seccion);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getExplorar = async () =>{
    try {
        const response = await fetch('http://localhost:3500/explorar/');
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getExplorarSeccion = async (seccion) =>{
    try {
        const response = await fetch('http://localhost:3500/explorar/'+seccion);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getFeed = async (usuario) =>{
    try {
        const response = await fetch('http://localhost:3500/feed/'+usuario);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const getFeedSeccion = async (usuario,seccion) =>{
    try {
        const response = await fetch('http://localhost:3500/feed/'+usuario+'/'+seccion);
        const json = await response.json();
        return json;
    } 
    catch (error) {
        console.log(error)
    }
}

export const registrar = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/registrar/',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
}

export const login = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/login/',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const getUsuario = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/usuarios/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const publicar = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/publicar/',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const cantPublicaciones = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/cantPublicaciones/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const cantSeguidos = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/cantSeguidos/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const cantSeguidores = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/cantSeguidores/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const isLiked = async (usuario,publicacion) =>{
	try {
		const response = await fetch('http://localhost:3500/isLiked/'+usuario+'/'+publicacion);
		return response
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const isFollow = async (seguidor,seguido) =>{
	try {
		const response = await fetch('http://localhost:3500/isFollow/'+seguidor+'/'+seguido);
		return response
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const crearLike = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/like/',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const seguir = async (seguidor, seguido) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch('http://localhost:3500/seguir/'+seguidor+'/'+seguido,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const editarUsuario = async (data) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/editarUsuario/',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const notificaciones = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/notificaciones/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const seguidores = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/seguidores/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

export const seguidos = async (usuario) =>{
	try {
		const response = await fetch('http://localhost:3500/seguidos/'+usuario);
		const json = await response.json();
		return json
		
	} 
	catch (error) {
		console.log(error)
	}
}

