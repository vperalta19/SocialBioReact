import React, { useState } from "react";
import Heart from "react-animated-heart";
import './../assets/css/Publicacion.css';

export default function Like() {
    const [isClick, setClick] = useState(false); //EL BOOLEANO ES LO QUE TRAIGO DEL BACK
    return (
      <div className='like disable-selection'>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
      </div>
    );
  }

