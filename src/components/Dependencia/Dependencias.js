import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import DependenciaList from './DependenciaList'


class Dependencias extends Component {


    constructor(){
        super();
        this.state={
            dependencias:[],
            useredit: {nombre: "", coordinador: "",  maximoNumeroUsuarios:0, ubicacion:"", active:false},
            db:firebase.firestore()
        };

    }

    componentDidMount(){
        this.state.db.collection("dependencias").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let dependenciasAuxiliares = this.state.dependencias;
              dependenciasAuxiliares.push(doc.data());
              this.setState( { dependencias: dependenciasAuxiliares });
            })
        );
      }

      onEditHandle(dependencia){
        // console.log(user)
         this.setState({
           useredit: dependencia
         })
       }
     
       onDeleteHandle(dependencia){
         this.state.database.collection("dependencias").doc(dependencia.id).delete()
         this.refresh()
       }

      render() {
          return (
        <div className="Dependencia container mt-5">

    <h1> Dependencias </h1>
    <DependenciaList dependencias={this.state.dependencias} ></DependenciaList>

        </div>
    );
  }
}

export default Dependencias;