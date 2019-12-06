import React from 'react';
const cors = require('cors');

export default class UpDatePOSTmycalendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                someKeyDisplay: {someData : "latitude 1"},
                someOtherDisplay: {someOtherData : "latitude 2"} 
        }
    }


    handleSubmission = (event) => {
        event.preventDefault(); // on va plutôt redéfinir plus bas la façon d'envoyer les datas.
           
        //let opCors = { methods: 'Post'}

        let mycalendar = {};
        for(let displa in this.state) {
            mycalendar[displa] = 'should be key display content';//this.state.displa ;
        }
        console.log(JSON.stringify(mycalendar));
            console.log ("qui était : ", mycalendar);
        fetch('http://localhost:5555/akacalendar/mycalendar', { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
          method: 'POST' ,
          //mode : 'cors',
          body: JSON.stringify(mycalendar), // this.dataform,
          headers: {'Content-Type':'application/json' } //Précise le type de data envoyé vers le serveur.
          
        })
    }

    handleInput = (event) => {  // Met à jour le contenu en direct tq le texte en entrée est rendu après passage dans le state pour être affiché.
             console.log("changing input value...")
        this.setState({
            somethirddisplay: event.target.value //!!!!!!!!!!!!!!!!!!!!!    !!!!!!!!!!    !!!!!!!   !!!!!!!
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
                    <label htmlFor="mycalendar">Données du calenadrier</label>
                    <input 
                        id="mycalendar" name="mycalendar" 
                        type="text" placeholder="Positions des bulles" 
                        value ={calend.mycalendar} onChange={this.handleInput}
                        />
                    <button>Enregistrer le calend</button>
                    <p>^ input à dissequer ^</p>
                </form>
            </div>
        )
    }
};
