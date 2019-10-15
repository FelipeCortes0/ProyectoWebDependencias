import React, { Component } from 'react';

class UsuarioItem extends Component {

  render() {
    var  usuario=this.props.usuario;

    return (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.apellido}</td>
        <td>{usuario.email}</td>
        <td>{usuario.contraseña}</td>
        <td>{usuario.validoHasta}</td>
        <td>{usuario.dependencia}</td>
        <td>{usuario.activo}</td>

      </tr>       
    );
  }
}

export default UsuarioItem;