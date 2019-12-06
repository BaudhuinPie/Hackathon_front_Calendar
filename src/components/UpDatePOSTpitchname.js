import React from 'react';
const cors = require('cors');

export default class UpDatePOSTpitchname extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
    }


    handleSubmission = (event) => {
        event.preventDefault(); // on va plutôt redéfinir plus bas la façon d'envoyer les datas.
        let word  = this.state.pitchname;
        console.log(JSON.stringify(this.state.pitchname));
            console.log ("qui était : ", this.state.pitchname);
            console.log(this.state);
        fetch(`http://localhost:5555/akacalendar/mycalendar/${word}`, { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
          method: 'POST' ,
          //mode : 'cors',
          body: JSON.stringify(this.state), // this.dataform,
          headers: {'Content-Type':'application/json' } //Précise le type de data envoyé vers le serveur.
          
        })
    }

    handleInput = (event) => {  // Met à jour le contenu en direct tq le texte en entrée est rendu après passage dans le state pour être affiché.
             console.log("changing input value...")
        this.setState({
            [event.target.name]: event.target.value //!!!!!!!!!!!!!!!!!!!!!    !!!!!!!!!!    !!!!!!!   !!!!!!!
        });
            //console.log(event.target.name, event.target.value);
    }

    /** Au lieu de déclenccher la mémorisation sur event onClick; 
     * on dépalce l'appel de fonction dans componentDidUpdate() */

    render() {
        let calend = this.state;

        return (

            <div>
                <form onSubmit={this.handleSubmission} >
                    <label htmlFor="pitchname"> Your calendar pitch name :</label>
                    <input 
                        id="pitchname" name="pitchname" 
                        type="text" placeholder="Positions des bulles" 
                        value ={calend.mycalendar} onChange={this.handleInput}
                        />
                    <button>Enregistrer le calend</button>
                    <p>^ inp ^</p>
                </form>
            </div>
        )
    }
};
