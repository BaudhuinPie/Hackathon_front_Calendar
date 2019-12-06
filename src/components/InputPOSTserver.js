import React from 'react';
const cors = require('cors');

export default class InputPOSTserver extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                mycalendar:'',
                mybubbles:'',
                asbl:''
        }
    }

    handleSubmission = (event) => {
        event.preventDefault(); // on va plutôt redéfinir plus bas la façon d'envoyer les datas.
            console.log("Le composant formulaire soumet :");
        // let formm = event.target;
        //     console.log(formm);
        // const dataform = new FormData (formm); // convertit la cible (bout de DOM )
        //     console.log(dataform, JSON.stringify(dataform));
        //     console.log(dataform);
        //     console.log("======exemple contnu=====")
        //     console.log("mybubbles sent : ", dataform.get("mybubbles")); // visit la cible avec la valeur de name (du input ici).
    
        console.log(JSON.stringify(this.state));
        console.log ("qui était : ", this.state);
        let opCors = { methods: 'Post'}

        fetch('http://localhost:5555/api/akacalendar', { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
          method: 'POST' ,
          mode : 'cors',
          body: JSON.stringify(this.state), // this.dataform,
          headers: {'Content-Type':'application/json' } //Précise le type de data envoyé vers le serveur.
          
        })
    }

    handleInput = (event) => {  // Met à jour le contenu en direct tq le texte en entrée est rendu après passage dans le state pour être affiché.
        console.log("changing input value...")
        this.setState({
            [event.target.name]: event.target.value
        });
            //console.log(event.target.name, event.target.value);
    }

    render() {
        let calend = this.state;

        return (

            <div>
                <form onSubmit={this.handleSubmission} >
                    <label htmlFor="mycalendar">Titre</label>
                    <input 
                        id="mycalendar" name="mycalendar" 
                        type="text" placeholder="Votre calendar ?" 
                        value ={calend.mycalendar} onChange={this.handleInput}
                    />
                    <label htmlFor="mybubbles">Contenu du jour</label>
                    <input 
                        id="mybubbles" name="mybubbles" 
                        type="text" placeholder="Votre url vidéo..." 
                        value={calend.mybubbles} onChange={this.handleInput}
                    />
                    <label htmlFor="asbl">asbl</label>
                    <input 
                        id="asbl" name="asbl" 
                        type="text" placeholder="choix offert en version premium" 
                        value={calend.asbl} onChange={this.handleInput}
                    />
                    <button>Enregistrer le calend</button>
                    <p>^ formulaire ^</p>
                </form>
            </div>
        )
    }
};
