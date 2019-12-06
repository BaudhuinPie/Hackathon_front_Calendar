import React, { Component }     from 'react';
import {NavLink}                from 'react-router-dom';
import CustomisationPersonnelle from './CustomisationPresonnelle';
import PrixAssociation          from './PrixAssociation';
import AsblInfo                 from './AsblInfo';
import Likes                    from './Likes';
import bulle                    from './bulle.css'; 

class Bulle extends Component {
    constructor(props) {
        super(props);
        console.log("in bulles ?", props.days)
        this.arrayDay = props.days;
        this.state = {  };
        console.log(this.props.url, "transindex")
       // this.lastElementofURL = this.findLastElement(this.props.url);
     

//     findLastElement = (url) => {
//         console.log(url, "c'est bulle URLL")
//         const splitted = url.split('/');
//         let lastSegment = splitted.pop();
//     return lastSegment
// }
    }
componentDidUpdate() {
    console.log(this.props.url, "c'est bulle URLL");
}
    
    render() { 
        return ( 
            <div className="headerBulle">
                <NavLink  
                        className="retourBulleLink" 
                        activeClassName="active" 
                        to={'/'} >
                    Retour
                </NavLink>
                {/* <p className="dayPageP">Day {index+1}</p> */}
            
                <div className="pageBulle">
                    <div className="pageBulleLeft">
                        <div class="embedresize">
                            <div>
                            <iframe allowfullscreen frameborder="0" src={this.props.days[this.props.url-1].customisationPersonnelle} allow='autoplay' width="300" height="350"></iframe>
                            
                            </div>
                        </div>
                        
                        </div>

                         
                    <div className="pageBulleRight">

                    <p> Great Day ! They have got 2,40€</p>
                        <h2>{this.props.days[this.props.url-1].asbl.name}</h2> <p>{this.props.days[this.props.url-1].asbl.description}</p>
                        <div class="embedresize">
                            {/* <div>
                            <iframe srcdoc={this.props.days[this.props.url-1].asbl.url} width="300" height="350"></iframe>
                            </div> */}

                    </div>
 
                </div> 
                </div>
            </div>
         );
    }
}
 
export default Bulle;