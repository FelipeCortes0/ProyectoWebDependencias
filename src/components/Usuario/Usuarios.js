import React, { Component } from 'react';
import firebase from '../../config/Firebase';

import UsuarioList from  './UsuarioList';
import UsuarioForm from './UsuarioForm';

class Usuarios extends Component {

  constructor(){
      super();

      this.state ={
        usuarios: [
                { id: 1,  nombre: "usuario1", apellido: "apellido1" , email:"hola1@hotmail.com", contraseña:"holahola1", validoHasta:0, dependencia:"nueva1", activo:false},
                { id: 2,  nombre: "usuario2", apellido: "apellido2" , email:"hola2@hotmail.com", contraseña:"holahola2", validoHasta:1, dependencia:"nueva2", activo:true},
                { id: 3,  nombre: "usuario3", apellido: "apellido3" , email:"hola3@hotmail.com", contraseña:"holahola3", validoHasta:2, dependencia:"nueva3", activo:false},
                { id: 4,  nombre: "usuario4", apellido: "apellido4" , email:"hola4@hotmail.com", contraseña:"holahola4", validoHasta:3, dependencia:"nueva4", activo:true},
            ],
            usuarioEdit: { id: "",  nombre: "", apellido: "", email:"", contraseña:"", validoHasta:0, dependencia:"", activo:false},
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

  agregarUsuario(usuario){

      let  usuarios = this.state.usuarios;

      if(usuario.id!==""){
        let index = usuarios.findIndex( (usuarioItem) => {return usuarioItem.id===usuario.id });
        usuarios[index] = usuario;
      }
      else{
        let  id  = Math.floor(Math.random()*100000)+1;
        usuario.id = id;
        usuarios.push(usuario);
      }
      this.setState({
        usuarios: usuarios,
        usuarioEdit: { id: "",  nombre: "", apellido: "", email:"", contraseña:"", validoHasta:0, dependencia:"", activo:false}
      });
  }

  editarUsuario(usuario){
    console.log(usuario);
    this.setState({
       UsuarioEdit: usuario
     });
  }


  render() {
    return (

      <div className="Usuarios container mt-5">
         <h1> Dependencia</h1>
         <UsuarioList  usuarios={this.state.usuarios} handleEditarUsuario={this.editarUsuario.bind(this)}/>
         <UsuarioForm handleNuevoUsuario={this.agregarUsuario.bind(this)}  UsuarioEdit={this.state.UsuarioEdit} />
      </div>
    );
  }
}

export default Usuarios;