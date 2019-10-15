import React, { Component } from 'react';
import './App.css';
import firebase from './config/Firebase';
import Home from './components/Home';
import Login from './components/Login/Login';

class App extends Component{

  constructor(){
    super();
    this.state={
      user:null
    }
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }
  
  authListener(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        // Usuario inicia sesión
        this.setState({user});
      } else {
        // Usuario no está logueado
         this.setState({user: null});
      }
    });
    
  }

  render() {
    return (
         <div className="App">
            { this.state.user ? (<Home/>): (<Login/>) }
        </div>
    );
  }


}

export default App;
