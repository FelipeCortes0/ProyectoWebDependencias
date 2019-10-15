import React, { Component } from 'react';
import {Link} from  'react-router-dom';
//Navbar que muestra las rutas
class NavBar extends Component {
  render() {

    return (
<div className="container">
<div className="row">
        <nav className="navbar navbar-main navbar-expand-lg col-12 navbar-light">

        <span className="navbar-brand">Proyecto Dependencias</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        

        <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/bienvenida">Bienvenida</Link>
            </li> 
            
            <li className="nav-item">
                <Link className="nav-link" to="/agregarUsuario">Agregar Usuarios</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/AgregarDependencias">Agregar Dependencias</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/dependencias">Dashboard Dependencias</Link>
            </li>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link"  to="/consultas">Consultas</Link>
            </li>
            </ul>
            
            </ul>


        </div>
        </nav>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" ></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" ></script>
    </div>
</div>
    );
  }
}

export default NavBar;