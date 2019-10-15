import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from  'react-router-dom';



class Bienvenida extends Component {
 
    render() {
        return (
        <Router>
          <div className="container">
            <br></br>
              <h2><strong>¡ Bienvenidos al sistema de dependencias y usuarios !</strong></h2>
              <br></br>
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=393&q=80"/>
          </div>
          <br></br>
          <br></br>
          </Router>
      );
    }
  }
  
  export default Bienvenida;