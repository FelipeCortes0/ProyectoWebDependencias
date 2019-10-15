import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import Alert from 'react-bootstrap/Alert'
class UsuarioForm extends Component {

  constructor() {
    super();
    this.state = {
        nombre:'pepito ', apellido:'perezz', email:'perez@hotmail.com', contraseña:'holhola', validoHasta:4, dependencia:'qalit', activo: false,
        usuarios: [], db: firebase.firestore(), dbDependencias: [],
        show: false,
        msg: "",
        variante: ""
         };
  }

  

  componentDidMount() {
    this.state.db.collection("usuarios").get().then((querySnapshot) =>
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        let usuariosAuxiliar = this.state.usuarios;
        usuariosAuxiliar.push(doc.data());
        this.setState({ usuarios: usuariosAuxiliar });
        console.log(this.state.usuarios + " aqui estan los usuarios")
      })
    );

    this.state.db.collection("dependencias").get().then((querySnapshot) =>
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        let dependenciasAuxiliar = this.state.dbDependencias;
        console.log(dependenciasAuxiliar + "aqui estan dependencias auxiliares");
        dependenciasAuxiliar.push(doc.data());
        this.setState({ dbDependencias: dependenciasAuxiliar });
        console.log(this.state.dbDependencias + "aqui estan dependencias db");

      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.length + "ESTE ES EL ESTADO INICIAL");
    let usuario = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        email: this.state.email,
        contraseña: this.state.contraseña,
        validoHasta: this.state.validoHasta,
        dependencia: this.state.dependencia,
        activo:this.state.activo
    }
    console.log(this.state + "ESTE ES EL OTRO ESTADO LUEGO DE LA MODIFICACION");
    console.log(this.state.dependencia);
    this.agregarUsuario(usuario);

  }

  agregarUsuario(usuario) {

    let usuarios = this.state.usuarios;
    console.log(this.state.dependencia.nombre + "aqui estoy imprimiendo");
     if (this.state.dependencia === "") {
      this.setState({ show: true });
      this.setState({ variante: "warning" });
      this.setState({ msg: " Seleccione una dependencia" });
      console.log("Seleccione una dependencia");
    }
    else {
      this.setState({ show: true });
      this.setState({ variante: "success" });
      this.setState({ msg: "Usuario creado exitosamente" });
      console.log("Creado exitosamente");
      usuarios.push(usuario);

      this.state.db.collection("usuarios").doc(usuario.nombre).set({
        nombre: usuario.nombre, apellido: usuario.apellido, email: usuario.email, contraseña: usuario.contraseña, validoHasta: usuario.validoHasta, dependencia: usuario.dependencia, activo: usuario.activo
    
  });
}

console.log("GUARDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");


    if (this.state.dependencia !== "" && this.state.dependencia !== "Selecciona una dependencia") {
      this.setState({
        usuarios: usuarios,
        nombre: '', apellido: '', email: '', contraseña: '', validoHasta:0,  dependencia: '', activo:false
      });
    }


  }


  



  handleOnChange(event) {
    // console.log(event.target.value);

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    let options = [];
    console.log(this.state.dbDependencias);
    options.push(<option selected>Selecciona una dependencia </option>);
    for (var i = 0; i < this.state.dbDependencias.length; i++) {

      options.push(<option>{this.state.dbDependencias[i].nombre}</option>);
    }

    return (
      <div id="form" className="UsuarioForm container mt-5">
        <Alert show={this.state.show} dismissible="true" onClick={handleHide} variant={this.state.variante} onChange={this.handleOnChange.bind(this)}>{this.state.msg}</Alert>
        <h1>Agrega un nuevo usuario</h1>

        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="hidden" onChange={this.handleOnChange.bind(this)} />
          
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresa el nombre del usuario" onChange={this.handleOnChange.bind(this)}  required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido</label>
            <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Ingresa el apellido" onChange={this.handleOnChange.bind(this)}  required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Ingresa un email" onChange={this.handleOnChange.bind(this)}  required />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña</label>
            <input type="password" className="form-control" id="contraseña" name="contraseña" placeholder="Ingresa una contraseña" onChange={this.handleOnChange.bind(this)} required />
          </div>
          <div className="form-group">
            <label htmlFor="validoHasta">valido Hasta</label>
            <input type="text" className="form-control" id="validoHasta" name="validoHasta" placeholder="Ingresa valido Hasta" onChange={this.handleOnChange.bind(this)} required />
          </div>
          <div className="form-group">
            <label htmlFor="dependencia">Dependencia</label>
            <select className="form-control custom-select"  id="dependencia" name="dependencia" onChange={this.handleOnChange.bind(this)} required>
              {options}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="activo">Activo</label>
            <input type="text" className="form-control" id="activo" name="activo" placeholder="Ingresa true o false" onChange={this.handleOnChange.bind(this)} required />
          </div>
          <button type="submit" className="btn btn-success">Agregar usuario</button>
        </form>
          <br></br>
      </div>
    );
  }
}

export default UsuarioForm;