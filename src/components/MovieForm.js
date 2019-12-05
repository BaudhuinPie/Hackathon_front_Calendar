import React from 'react';
const cors = require('cors');

class MovieForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
                title:'',
                year:'',
                director:''
        }
    }

    handleSubmission = (event) => {
        event.preventDefault(); // on va plutôt redéfinir plus bas la façon d'envoyer les datas.
            console.log("On est dans l'application formulaire");
        let formm = event.target;
            console.log(formm);
        const dataform = new FormData (formm); // convertit la cible (bout de DOM )
            console.log(dataform, JSON.stringify(dataform));
            console.log("year sent : "+ dataform.get("year")); // visit la cible avec la valeur de name (du input ici).
        
        let opCors = { methods: 'Post'}

        fetch('http://localhost:5000/api/movies', { // On créée ici l'adresse URL puis on va ensuite aller paramétrer le serveur.
          method: 'POST' ,
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
        let film = this.state;

        return (

            <div>
                <form onSubmit={this.handleSubmission} >
                    <label htmlFor="title">Titre</label>
                    <input 
                        id="title" name="title" 
                        type="text" placeholder="Votre titre?" 
                        value ={film.title} onChange={this.handleInput}
                    />
                    <label htmlFor="year">Année</label>
                    <input 
                        id="year" name="year" 
                        type="number" placeholder="Année de sortie" 
                        value={film.year} onChange={this.handleInput}
                    />
                    <label htmlFor="director">Réalisateur</label>
                    <input 
                        id="director" name="director" 
                        type="text" placeholder="Célèbre?(Lol)" 
                        value={film.director} onChange={this.handleInput}
                    />
                    <button>Enregistrer le film</button>
                    <p>y</p>
                </form>
            </div>
        )
    }
};

export default MovieForm;