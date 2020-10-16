import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/CategoriaBtns.css'
import Home from "./../assets/img/home.png"
import Reciclaje from "./../assets/img/reciclaje.png"
import Tips from "./../assets/img/tips.png"
import Eventos from "./../assets/img/eventos.png"
import Experiencias from "./../assets/img/experiencias.png"

class CategoriaBtns extends React.Component{
    render(){
        return(
            <div className="">
                <button className="btn btncategorias a btn-sm mt-2 mr-1" type="button" name="button"><img className="imagen" src={Home} alt=""/><br/>Todo</button>
                <button className="btn btncategorias b btn-sm mt-2 mr-1" type="button" name="button"><img className="imagen" src={Reciclaje} alt=""/><br/>Reciclaje</button>
                <button className="btn btncategorias c btn-sm mt-2 mr-1" type="button" name="button"><img className="imagenluz" src={Tips} alt=""/><br/>Tips</button>
                <button className="btn btncategorias d btn-sm mt-2 mr-1" type="button" name="button"><img className="imagen" src={Eventos} alt=""/><br/>Eventos</button>
                <button className="btn btncategorias e btn-sm mt-2" type="button" name="button"><img className="imagen" src={Experiencias} alt=""/><br/>Experiencias</button>
            </div>

        )
    }
}
export default CategoriaBtns