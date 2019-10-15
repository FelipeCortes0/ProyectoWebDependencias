import React, { Component } from 'react';
import UsuarioItem from './UsuarioItem';

class UsuarioList extends Component {

  handleEditUsuario(usuario){
    this.props.handleEditarUsuario(usuario);
  }

  render() {
    let  usuarioList = this.props.usuarios.map( (usuarioMap)=>
        (<UsuarioItem key={usuarioMap.nombre} usuario={usuarioMap} />)
    );

    return (
      <div className="usuarioList">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Contraseña</th>
                <th scope="col">validoHasta</th>
                <th scope="col">dependencia</th>
                <th scope="col">activo</th>

                </tr>
            </thead>
            <tbody>
                {usuarioList}
            </tbody>
        </table>
      </div>
    );
  }
}

export default UsuarioList;