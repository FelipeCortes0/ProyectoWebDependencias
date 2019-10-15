import React, { Component } from 'react';
import ConsultaDependencia from './ConsultaDependencia';
import ConsultaUsuario from './ConsultaUsuario';
 
class Consultas extends Component {

  constructor(){
      super();

      this.state ={
      };

  }

  render() {
    return (

      <div className="Consultas container mt-5">
         <h1> Realice consultas acerca de las dependencias y de sus usuarios asociados</h1>
         <ConsultaDependencia/>
         <ConsultaUsuario/>
      </div>
    );
  }
}

export default Consultas;