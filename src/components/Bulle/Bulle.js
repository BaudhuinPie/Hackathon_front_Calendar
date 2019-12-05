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
        this.state = {  }
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
            
                <div className="pageBulle">
                    <div className="likesBulle">
                        < Likes 
                            likes={this.props.likes}
                        />
                    </div>
                    <div className="customBulle">
                        < CustomisationPersonnelle
                            customisationPersonnelle={this.props.customisationPersonnelle}
                        />
                   </div>
                    <div className="prixBulle">
                        < PrixAssociation 
                            prixAssociation={this.props.prixAssociation}
                        />
                    </div>
                    <div className="asblBulle">
                        < AsblInfo 
                            asblInfo={this.props.asblInfo}
                        />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Bulle;