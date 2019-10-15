import React, { Component } from 'react';

class DependenciaItem extends Component {

  handleEdit(){
    this.props.onEdit(this.props.dependencia)
  }
  handleDel(){
    this.props.onDelete(this.props.dependencia)
  }


  render() {
var dependencia=this.props.dependencia;


    return (
        <div className="Dependencia">

<h1>Dependencia item</h1>
<tr>
        <th scope="row">{dependencia.id}</th>
        <td>{dependencia.nombre}</td>
        <td>{dependencia.coordinador}</td>
        <td>{dependencia.maximoNumeroUsuarios}</td>
        <td>{dependencia.ubicacion}</td>
        <td>{dependencia.activa}</td>
        <td>
        <button className="btn btn-primary mx-3" onClick={this.handleEdit.bind(this)} >Editar</button>
        <button className="btn btn-danger" onClick={this.handleDel.bind(this)} >Eliminar</button>
        </td>

      </tr>
      </div>
    );
  }
}

export default DependenciaItem;