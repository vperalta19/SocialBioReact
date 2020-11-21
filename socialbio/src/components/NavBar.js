import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/NavBar.css'

class NavBar extends React.Component{
    render(){
        return(
            <div className='row align-items-center'> 
                <div className="col-12 navbar text-center">
                    <ul className="headertop">
                        <li className="top p-2">
                            10 Publicaciones
                        </li>
                        <li className="top p-2">
                            10 Seguidores
                        </li>
                        <li className="top p-2">
                            10 Siguiendo
                        </li>
                    </ul>
                </div>
            </div>
    

        )
    }
}
export default NavBar