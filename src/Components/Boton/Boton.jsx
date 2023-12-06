import React from "react";

import Button from 'react-bootstrap/Button';


const Boton= (props)=> {
    return(
    <div>
         <Button className="d-flex justify-content-center align-items-center" variant="outline-success">{props.label}</Button>{' '}
    </div>);

}

export default Boton;