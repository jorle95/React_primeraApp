import React from 'react';

function Navigation(props) { 
  return (

    <nav className="nav navbar-dark bg-dark">
        <a href="" className="text-white">
        {props.titulo}
        </a>
    </nav>

  );
}

export default Navigation;//No se va a usar pero quiero tenerlo guardado
