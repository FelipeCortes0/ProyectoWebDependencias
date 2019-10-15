import React, { Component } from 'react';
import DependenciaActual from '../Dependencia/DependenciaActual';
import firebase from '../../config/Firebase';

class ConsultaDependencia extends Component {

    constructor(){
        super();
        this.state={
            dependencia:{nombre:'', coordinador:'', maximoNumeroUsuarios:0, ubicacion:'', activa:true},
            dbDependencias:[],  db: firebase.firestore(), nombre:''
        }
    }

    componentDidMount(){
        this.state.db.collection("dependencias").get().then((querySnapshot)=>
            querySnapshot.forEach(doc =>{
              console.log(doc.data());
              let dependenciasAuxiliares = this.state.dbDependencias;
              dependenciasAuxiliares.push(doc.data());
              this.setState( {dbDependencias: dependenciasAuxiliares} );
            })
        );
      }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.nombre);

        this.state.dependencia=[];
        this.setState({dependencia:{nombre:'', coordinador:'', maximoNumeroUsuarios:0, ubicacion:'', activa:false}});
        for(var i=0;i<this.state.dbDependencias.length;i++){
        let actual= this.state.dbDependencias[i];
        if(actual.nombre===this.state.nombre){
            this.setState({
                dependencia: {
                    nombre:actual.nombre,
                    coordinador: actual.coordinador,
                    maximoNumeroUsuarios: actual.maximoNumeroUsuarios,
                    ubicacion: actual.ubicacion,
                    activa: actual.activa

                }
            });
            console.log("si esta llegando");
        }
    }
}
    
    handleOnChange (event){
         this.setState({
             [event.target.name]: event.target.value
         });
       }

  render() {

    return (
        <div className="ConsultaDependencia">
              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}> 
              <input className="form-control mr-sm-2" type="search" placeholder="Dependencia por nombre" name="nombre" onChange={this.handleOnChange.bind(this)} aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Buscar</button>
              </form>
              <DependenciaActual dependencia={this.state.dependencia}/>
        </div>
    );
  }
}

export default ConsultaDependencia;