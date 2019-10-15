import React, { Component } from 'react';
import DependenciaActual from './DependenciaActual';
class DependenciaList extends Component {

    onEditHandle(dependencia){
        //console.log(user)
        this.props.onEdit(dependencia)
    }

    onDeleteHandle(dependencia){
        //console.log(user)
        this.props.onDelete(dependencia)
    }

    render() {

        let dependenciaList = this.props.dependencias.map( (dependenciaMap) =>
         (<DependenciaActual key={dependenciaMap.nombre} dependencia={dependenciaMap} onEdit={this.onEditHandle.bind(this)}  onDelete={this.onDeleteHandle.bind(this)}  />)
        );
        return (
            <div className="Dependencia" >
                <br></br>
            { dependenciaList }
            </div>
        );
    }
}

export default DependenciaList;