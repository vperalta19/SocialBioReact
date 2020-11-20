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
