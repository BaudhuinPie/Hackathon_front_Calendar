import React, { Component } from 'react';
import './Addpanel.css'

class Input extends Component {

    render() {
        return (
            <input type="text" onChange={(e) => this.props.onChange(e, this.props.position)} value={this.props.value}  />
        )
    }
}

export default Input;