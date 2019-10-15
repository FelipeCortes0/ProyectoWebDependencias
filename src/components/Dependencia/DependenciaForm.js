import React, { Component } from 'react';
import firebase from '../../config/Firebase';
import Alert from 'react-bootstrap/Alert';

 
class DependenciaForm extends Component {

    constructor() {
        super();
        this.state = {

            nombre: '', coordinador: '', maximoNumeroUsuarios: 0, ubicacion : '', activa:false,
             dependencias: [{ nombre: 'Medicina', coordinador: 'Pepito', maximoNumeroUsuarios:5, ubicacion: 'Cali', activa:true }], db: firebase.firestore()
           , show:false,
            msg:"",
            variante:"",
        };

    }

    componentDidMount() {
        this.state.db.collection("dependencias").get().then((querySnapshot) =>
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                let dependenciasAuxiliares = this.state.dependencias;
                dependenciasAuxiliares.push(doc.data());
                this.setState({ dependencias: dependenciasAuxiliares });
            })
        );
    }

    agregarDependencia(dependencia) {
        let dependencias = this.state.dependencias;
        this.setState({ show: true });
        this.setState({variante:"success"});
        this.setState({msg:"Dependencia creada exitosamente"});
        dependencias.push(dependencia);

            this.state.db.collection("dependencias").doc(dependencia.nombre).set({
            nombre: dependencia.nombre, coordinador: dependencia.coordinador, maximoNumeroUsuarios: dependencia.maximoNumeroUsuarios, ubicacion: dependencia.ubicacion, activa: dependencia.activa
        });
        this.setState({
        dependencias: dependencias,
        nombre:"",coordinador:"",maximoNumeroUsuarios:0,ubicacion:"", activa:true

        });
    }

    onEditHandle(user){
         this.setState({
           useredit: user
         })
       }


    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state);

        let dependencia = {

            nombre: this.state.nombre,
            coordinador: this.state.coordinador,
            maximoNumeroUsuarios: this.state.maximoNumeroUsuarios,
            ubicacion: this.state.ubicacion,
            activa: this.state.activa
        }
         this.agregarDependencia(dependencia);
    }



    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const handleHide = () => this.setState({ show: false });
        return (
            <div className="DependenciaForm container mt-5">
 <Alert show={this.state.show}  dismissible="true" onClick={handleHide} variant={this.state.variante} onChange={this.handleOnChange.bind(this)}>{this.state.msg}</Alert>
     
                <h1>Agrega una nueva dependencia</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" onChange={this.handleOnChange.bind(this)} placeholder="Ingrese el nombre" required/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="coordinador">Coordinador</label>
                        <input type="text" className="form-control" id="coordinador" name="coordinador" onChange={this.handleOnChange.bind(this)} placeholder="Ingrese el coordinador" required/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="maximoNumeroUsuarios">Máximo número de usuarios</label>
                        <input type="text" className="form-control" id="maximoNumeroUsuarios" name="maximoNumeroUsuarios" onChange={this.handleOnChange.bind(this)} placeholder="Ingresa el Máximo número de usuarios" required/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="ubicacion">Ubicación</label>
                        <input type="text" className="form-control" id="ubicacion" name="ubicacion" onChange={this.handleOnChange.bind(this)}  placeholder="Ingrese la ubicación" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="activa">Activa</label>
                        <input type="text" className="form-control" id="activa" name="activa" onChange={this.handleOnChange.bind(this)}  placeholder="Ingrese true o false" />

                    </div>

                    <button type="submit" className="btn btn-success">Agregar Dependencia</button>
                    <br></br>
                    </form>
                    <br></br>

            </div>
             );
    }
}

export default DependenciaForm;