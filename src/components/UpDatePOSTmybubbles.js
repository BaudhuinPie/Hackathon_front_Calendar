import React from 'react';
const cors = require('cors');

export default class UpDatePOSTmybubbles extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                urlCustom: "monURL",
                urlASBLshow: "asblURL" 
        }
    }


    handleSubmission = (event) => {
        event.preventDefault(); // on va plutôt redéfinir plus bas la façon d'envoyer les datas.
           
        //let opCors = { methods: 'Post'}
        console.log(JSON.stringify(this.state));
            console.log ("qui était : ", this.state);
        fetch('http://localhost:5555/akacalendar/mybubbles', { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
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
        let bubbling = this.state;

        return (

            <div>
                <form onSubmit={this.handleSubmission} >
                    <label htmlFor="urlCustom">Bubble content</label>
                    <input 
                        id="urlCustom" name="urlCustom" 
                        type="text" placeholder="url rigolote" 
                        value ={bubbling.urlCustom} onChange={this.handleInput}
                        />
                         <input 
                        id="urlASBLshow" name="urlASBLshow" 
                        type="text" placeholder="url de l'asbl" 
                        value ={bubbling.asblURLshow} onChange={this.handleInput}
                        />
                    <button>Enregistrer le bubbling</button>
                    <p>^ input reprendre ^</p>
                </form>
            </div>
        )
    }
};
