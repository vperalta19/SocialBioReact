import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/CategoriaBtns.css'
import Home from "./../assets/img/home.png"
import Reciclaje from "./../assets/img/reciclaje.png"
import Tips from "./../assets/img/tips.png"
import Eventos from "./../assets/img/eventos.png"
import Experiencias from "./../assets/img/experiencias.png"

class CategoriaBtns extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoriaSeleccionada: 'todo'
        }
    }

    handleClick = (categoria) => {
        this.setState({
            categoriaSeleccionada: categoria
        })
        this.props.categoriaFn(categoria)
	}

    comparacion(event){
        return (event.target.name === this.state.categoriaSeleccionada)
    }

    render(){
        return(
            <div className="row m-0">
                <div className="col m-1 p-0">
                    {(() => {
                        if ('todo'===this.state.categoriaSeleccionada){
                            return (
                                <button className="btncategorias a btn-sm mt-2 seleccionado" name="todo" onClick={()=>{this.handleClick('todo')}}><img className="imagen" src={Home} alt=""/><br/>Todo</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias a btn-sm mt-2" name="todo" onClick={()=>{this.handleClick('todo')}}><img className="imagen" src={Home} alt=""/><br/>Todo</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('reciclaje'===this.state.categoriaSeleccionada){
                            return (
                                <button className="btncategorias b btn-sm mt-2 seleccionado" name="reciclaje" onClick={()=>{this.handleClick('reciclaje')}}><img className="imagen" src={Reciclaje} alt=""/><br/>Reciclaje</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias b btn-sm mt-2" name="reciclaje" onClick={()=>{this.handleClick('reciclaje')}}><img className="imagen" src={Reciclaje} alt=""/><br/>Reciclaje</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('tips'===this.state.categoriaSeleccionada){
                            return (
                                <button className="btncategorias c btn-sm mt-2 seleccionado" name="tips" onClick={()=>{this.handleClick('tips')}}><img className="imagenLuz" src={Tips} alt=""/><br/>Tips</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias c btn-sm mt-2" name="tips" onClick={()=>{this.handleClick('tips')}}><img className="imagenLuz" src={Tips} alt=""/><br/>Tips</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('eventos'===this.state.categoriaSeleccionada){
                            return (
                                <button className="btncategorias d btn-sm mt-2 seleccionado" name="eventos" onClick={()=>{this.handleClick('eventos')}}><img className="imagen" src={Eventos} alt=""/><br/>Eventos</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias d btn-sm mt-2" name="eventos" onClick={()=>{this.handleClick('eventos')}}><img className="imagen" src={Eventos} alt=""/><br/>Eventos</button>
                            )
                        }
                    })()}
                </div>
                <div className="col m-1 p-0">
                    {(() => {
                        if ('experiencias'===this.state.categoriaSeleccionada){
                            return (
                                <button className="btncategorias e btn-sm mt-2 seleccionado" name="experiencias" onClick={()=>{this.handleClick('experiencias')}}><img className="imagen" src={Experiencias} alt=""/><br/>Experiencias</button>
                            )
                        }
                        else{
                            return (
                                <button className="btncategorias e btn-sm mt-2" name="experiencias" onClick={()=>{this.handleClick('experiencias')}}><img className="imagen" src={Experiencias} alt=""/><br/>Experiencias</button>
                            )
                        }
                    })()}
                </div>    
            </div>

        )
    }
}
export default CategoriaBtns