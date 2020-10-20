import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import './../assets/css/Publicacion.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <FontAwesomeIcon onClick={handleClick} className='tresPuntitos' icon={faEllipsisH}/>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            
        >
            <MenuItem onClick={handleClose}>Editar</MenuItem>
            <MenuItem onClick={handleClose}>Eliminar</MenuItem>
        </Menu>
    </div>
  );
}
