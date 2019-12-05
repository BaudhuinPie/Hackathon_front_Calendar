import React, { Component } from 'react';

class CustomisationPersonnelle extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <p>{this.props.customisationPersonnelle}</p>
            </div>
         );
    }
}
 
export default CustomisationPersonnelle;