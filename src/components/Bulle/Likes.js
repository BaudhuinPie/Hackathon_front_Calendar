import React, { Component } from 'react';

class Likes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="likes">
                <p>{this.props.likes}</p>
            </div>
         );
    }
}
 
export default Likes;