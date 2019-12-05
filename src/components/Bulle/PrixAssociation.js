import React, { Component } from 'react';

class PrixAssociation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <img className='prixAssociationImage' src='https://cdn.pixabay.com/photo/2014/08/27/14/33/ticket-429202_960_720.png' style={{width:"200px"}} /> 
                <p>{this.props.prixAssociation}</p>
            </div>
         );
    }
}
 
export default PrixAssociation;


