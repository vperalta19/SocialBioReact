export const getInicio = async (usuario) =>{
    try {
        const response = await fetch('http://localhost:5000/inicio/'+usuario);
        return(await response.json())
    } 
    catch (error) {
        console.log(error)
    }
}