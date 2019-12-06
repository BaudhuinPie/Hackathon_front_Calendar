import React from 'react';
import './BackOffice.css';
//import Addpanel from './Addpanel';
import ASBLPanel from './ASBLPanel';
import AddpanelPie from '../AddpanelPie';

class BackOffice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    sendForSave = (aPanel) => {
        console.log("state is remontée")
        this.setState({urlCustomList: aPanel})
    }
    sendToSave = (aPanel) => {
        this.setState({asblUrlList: aPanel})
    }
    //=============================================
    handleSubmission = (event) => {
           console.log("submission")
        console.log(JSON.stringify(this.state));
            console.log ("qui était : ", this.state);
        fetch('http://localhost:5555/akacalendar/mybubbles', { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
          method: 'POST' ,
          //mode : 'cors',
          body: JSON.stringify(this.state), // this.dataform,
          headers: {'Content-Type':'application/json' } //Précise le type de data envoyé vers le serveur.
          
        })
    }
    //=====================

    componentDidUpdate(){
        this.handleSubmission();
        console.log(this.state)
    }

    render() {
        return (
            <div class="backoffice-zone">
                <p>caddaae</p>
                <AddpanelPie  submission ={this.sendForSave}/>
                <ASBLPanel submission = {this.sendToSave}/>
            </div>
        )
    }
}

export default BackOffice;