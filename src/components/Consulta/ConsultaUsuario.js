import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import UsuarioList from '../Usuario/UsuarioList';

class ConsultaUsuario extends Component {

    constructor(){
        super();
        this.state={
           usuarios:[], 
            dbUsuarios:[],  db: firebase.firestore(),
            nombre:'', cheked:'nombre' 
        }
    }

    componentDidMount(){
        this.state.db.collection("usuarios").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let usuariosAuxiliares = this.state.dbUsuarios;
              usuariosAuxiliares.push(doc.data());
              this.setState( {dbUsuarios: usuariosAuxiliares});
            })
        );
      }
    
    
      //Comparar por nombre del usuario
    handleSubmit(e){
        e.preventDefault();
        this.state.usuarios=[];
        
        if(this.state.cheked==='nombre'){
            
            let  usuarios = this.state.usuarios;
            for(var i=0;i<this.state.dbUsuarios.length;i++){
                let usuarioActual= this.state.dbUsuarios[i];
                if(usuarioActual.nombre===this.state.nombre){
                    let usuario = {
                        nombre: usuarioActual.nombre,
                        apellido: usuarioActual.apellido,
                        email: usuarioActual.email,
                        contraseña: usuarioActual.contraseña,
                        validoHasta: usuarioActual.validoHasta,
                        dependencia: usuarioActual.dependencia,
                        activo: usuarioActual.activo
                      }
                        usuarios.push(usuarioActual);
                    }
            }
            this.setState({
                usuarios: usuarios
            });
        }

        // compara por dependencia
        if(this.state.cheked==='dependencia'){
            let  usuarios = this.state.usuarios;
            for(var i=0;i<this.state.dbUsuarios.length;i++){
                let usuarioActual= this.state.dbUsuarios[i];
                if(usuarioActual.dependencia===this.state.nombre){
                    let usuario = {
                        nombre: usuarioActual.nombre,
                        apellido: usuarioActual.apellido,
                        email: usuarioActual.email,
                        contraseña: usuarioActual.contraseña,
                        validoHasta: usuarioActual.validoHasta,
                        dependencia: usuarioActual.dependencia,
                        activo: usuarioActual.activo
                      }
                        usuarios.push(usuarioActual);
                }
            }
            this.setState({
                usuarios: usuarios
            });
        }
    }
    
    handleOnChange (event){
        // console.log(event.target.value);
     
         this.setState({
             [event.target.name]: event.target.value
         });
    }

    handleOnChangeCheked(event){
        this.setState({
            cheked: event.target.value
          });
    }

  render() {

    return (
        <div className="ConsultaUsuario">
              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}> 
              <input className="form-control mr-sm-2" type="search" placeholder="Nombre" name="nombre" onChange={this.handleOnChange.bind(this)} value={this.state.nombre} aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Buscar</button>
              </form>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="nombre" name="cheker" onChange={this.handleOnChangeCheked.bind(this)} />
                <label className="form-check-label">Nombre</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" value="dependencia" name="cheker" onChange={this.handleOnChangeCheked.bind(this)}/>
                <label className="form-check-label">Dependencia</label>
              </div>
             <UsuarioList usuarios={this.state.usuarios}/>
        </div>
    );
  }
}

export default ConsultaUsuario;