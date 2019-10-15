import React, { Component } from 'react';

class Usuario extends Component {


  render() {
    return (
        <div>
            {this.props.match.params.id}
        </div>
    );
  }
}

export default Usuario;