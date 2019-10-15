import React, { Component } from 'react';
import UsuarioList from '../Usuario/UsuarioList';
import firebase from '../../config/Firebase';
 

class DependenciaActual extends Component {

    constructor(){

        super();

        this.state={
            usuarios:[],
            usuariosDependencia:[],
            db: firebase.firestore()
        };
    }


    componentDidMount(){
        
        this.state.db.collection("usuarios").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let usuariosAuxiliar = this.state.usuarios;
              usuariosAuxiliar.push(doc.data());
              this.setState( {usuarios: usuariosAuxiliar});
            })
        );
      }

  render() {
    this.state.usuariosDependencia=[];
   
var dependenciaActual=this.props.dependencia;
console.log(dependenciaActual.nombre + " ESTA ES MI DEPENDENCIA ACTUAL");
let usuariosn=this.state.usuarios;
console.log(usuariosn.length + " ESTOS SON LOS USUARIOS A RECORRER");

for(var i=0;i<usuariosn.length;i++){

    var usuarioActual=usuariosn[i];
    console.log(usuarioActual.dependencia.nombre + "ESTA ES LA DEPENDENCIA DE MI USUARIO ACTUAL");

    if(usuarioActual.dependencia===dependenciaActual.nombre){
        if(!this.state.usuariosDependencia.includes(usuarioActual)){

            this.state.usuariosDependencia.push(usuarioActual);
                console.log("se agrega a:"+usuarioActual.nombre);
        }

    }


}
    return (
        <div className="Dependencia">
        <h1>{dependenciaActual.nombre}</h1>
        <hr></hr>
        <table className="table">
            <thead>
                <tr>
               
                <th scope="col">Nombre</th>
                <th scope="col">Coordinador</th>
                <th scope="col">Máximo Número Usuarios</th>
                <th scope="col">Ubicacion</th>
                <th scope="col">Activa</th>

                </tr>
            </thead>
            <tbody>
            <tr>
        <th scope="row">{dependenciaActual.nombre}</th>
        <td>{dependenciaActual.coordinador}</td>
        <td>{dependenciaActual.maximoNumeroUsuarios}</td>
        <td>{dependenciaActual.ubicacion}</td>
        <td>{dependenciaActual.activa}</td>

      </tr>
            </tbody>
        </table>

      <small><strong>Usuarios asociados</strong></small>


<UsuarioList usuarios={this.state.usuariosDependencia}></UsuarioList>
    
      <hr></hr>
        </div>
    );
  }
}

export default DependenciaActual;