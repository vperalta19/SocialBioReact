import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/NavBar.css'

class NavBarSeguidoresSeguidos extends React.Component{
    render(){
        return(
        <div className="col-12 navbar pt-2 pb-2">
                 
            <ul className="headertop">
              <li className="top"><a className="text-white mr-1" href="#">10</a></li>
              <li className="top"><a className="text-white mr-3" href="#">Seguidores</a></li>
              <li className="top"><a className="text-white mr-1" href="#" >10</a></li>
              <li className="top"><a className="text-white mr-3" href="#">Siguiendo</a></li>
            </ul>
        </div>

        )
    }
}
export default NavBarSeguidoresSeguidos;