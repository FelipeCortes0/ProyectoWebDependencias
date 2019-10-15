import React, { Component } from 'react';
import firebase, { auth, provider } from '../../config/Firebase';
import Alert from 'react-bootstrap/Alert';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            contraseña: '',
            mensaje: "",
            alerta: false,
            tipoAlerta: ""
        };

    }

    

    //para iniciar sesión con el auth de firebase
    handleSubmit(e) {
        e.preventDefault();

       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.contraseña).then((u)=>{
        }).catch((error) => {
            this.setState({ alerta: true });
            this.setState({ tipoAlerta: "warning" });
      
            this.setState({ mensaje: error.message });
        console.log(error.message);
      });

    }

    //para registrarse con el auth de firebase
    handleRegister(e){
        e.preventDefault();

       firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.contraseña).then((u)=>{
        }).then((u)=>{}).catch((error) => {
            this.setState({ alerta: true });
            this.setState({ tipoAlerta: "warning" });
      
            this.setState({ mensaje: error.message });
        console.log(error.message);
      });

    }


    handleOnChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {
        
        const handleHide = () => this.setState({ alerta: false });


        return (
            <div className="Login container mt-5 " >
                <Alert show={this.state.alerta} dismissible="true" onClick={handleHide} variant={this.state.tipoAlerta} onChange={this.handleOnChange.bind(this)}>{this.state.mensaje}</Alert>
       
                <form>
                    <div className="form-group">


                    <div>
                    <label htmlFor="email" >Correo electrónico</label>
                    </div>


                    <input type="email" className="form-control" id="email" name="email" placeholder="Ingrese el correo electrónico" onChange={this.handleOnChange.bind(this)} value={this.state.email} />


                    </div>
                    <div className="form-group">

                    <label htmlFor="contraseña" >Contraseña</label>
                    <input type="password" className="form-control" id="contraseña" name="contraseña" placeholder="Ingrese la contraseña" onChange={this.handleOnChange.bind(this)} value={this.state.contraseña} />
                    </div>
                    <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-info">Ingresar</button>
                    <button onClick={this.handleRegister.bind(this)} type="submit" className="btn btn-info ml-3">Registrarse</button>
                </form>
            </div>
        );
    }
}

export default Login;