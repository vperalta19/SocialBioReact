export const getInicio = async (usuario) =>{
    try {
        const response = await fetch('http://localhost:5000/inicio/'+usuario);
        return(await response.json())
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
        const response = await fetch('http://localhost:5000/registrar/',options);
        console.log(response)
    } 
    catch (error) {
        console.log(error)
    }
}