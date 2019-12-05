import React, { Component } from 'react';

class AsblInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>{this.props.asblInfo}</p>
            </div>
         );
    }
}
 
export default AsblInfo;

