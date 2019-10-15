import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from  'react-router-dom';
import NavBar from './NavBar';
import firebase from '../config/Firebase'
import UsuarioForm from './Usuario/UsuarioForm'
import Dependencias from './Dependencia/Dependencias'
import DependenciaForm from './Dependencia/DependenciaForm'
import Consultas from './Consulta/Consultas'
import Bienvenida from './Bienvenida';

// Clase por default 
class Home extends Component {

    constructor(){
        super();
      }

      // metodo de logout
      logout(){
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
          console.log(error.message);
        });
      }

      render() {
        return (
          <Router>
            <div className="Home">
             <NavBar/>
             <Route exact path="/dependencias" component={Dependencias}/>
             <Route exact path="/AgregarDependencias" component={DependenciaForm}/>
             <Route path="/agregarUsuario" component={UsuarioForm}/>
             <Route path="/consultas" component={Consultas}/>
             <Route path="/bienvenida" component={Bienvenida}/>
             </div>
             <button className="btn btn-danger"  onClick={this.logout.bind(this)}>Salir</button>
            </Router>
        );
      }

}

export default Home;