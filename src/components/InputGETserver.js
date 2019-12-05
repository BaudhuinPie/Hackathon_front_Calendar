import React from 'react';
import axios from 'axios'; // ipmporter xios est nécessaire pour fetchinget receip...
import Movie from './Movie';
import { getDefaultWatermarks } from 'istanbul-lib-report';

 export default class InputGETserver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
            freshDATA: false,
            toClean: '',
            'mycalendar' : { data : ['coucou']},
            'mybubbles' : { data : ['bobo']},
            'asbl': { data : ['sisi']}
        }
    }

       



        // ACTIVE SeTsTate() => UpDating incoming after click
    getData = (pointer) => {
        if ( this.state.mounted) {
            axios // j'appelle axios addon télérachargé localement
                .get(`http://localhost:5555/akacalendar/${pointer}`)
                .then(data => {
                    console.log("Response to GET request :" );
                    //let val = JSON.parse(res.data)

                    this.setState({
                        freshDATA: true,
                        toClean: pointer,
                        [pointer]: data,

                    })
                })
        }
        console.log('freshDATA set to true')
        
    }

        // Traite les données après réception pour récupérer juste le contenu de la table voulue.
        // ATTENTION: un updtate de données non nettoyé est rendu entre temps, avant donc le rendu final nettoyé
    cleanState = () => {
        if(this.state.freshDATA) {
            let calendata = this.state;
            console.log( "to CLEAN:",this.state.toClean )

            switch(this.state.toClean) {
                case 'mycalendar':
                        let betterCalendar = calendata.mycalendar.data[0];
                        this.setState({
                            freshDATA: false,
                            mycalendar : betterCalendar,
                            toClean: ''
                        });
                        
                break;
                 
                case 'mybubbles':
                        let betterBubble = calendata.mybubbles.data[0];
                        this.setState({
                            freshDATA: false,
                            mybubbles : betterBubble,
                            toClean: ''
                        })
                break;

                case 'asbl':
                        let betterASBL = calendata.asbl.data[0];
                        this.setState({
                            freshDATA: false,
                            asbl: betterASBL,
                            toClean: ''
                        })
                break;
                default:
                        this.setState({ freshDATA: false })
            }
            console.log("state data is being cleaned (hover update)");
        }
    }

        // UpDating done, it calls this one  create a <table> that will be displayed :
    spreadData = () => {
        console.log('=========got===========')
        return(<p> You asked for some data</p>)
    }


        // after udating, it will display the data got from this.state by the function above

    willDisplay = "DISPLAY : Ready to get data" ;


//==================================================================================================
    // work done :
    componentDidUpdate() {
        this.willDisplay = this.spreadData() ;
        this.cleanState();
        console.log("after UPDATE", this.state)
    }

    //------------------------

    // You cannot acces data before Mounting ...
    componentDidMount() { 
      this.setState({mounted:true}); // ensuite je définis cette fonction
    }


// RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRr_ Rendering _RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
    render(){
        return(
            <div>ceci est une liste
                
            <ul>
                {this.willDisplay}
            </ul>

                <button onClick ={ () => this.getData('mycalendar')}>get calendar datas</button>
                <button onClick= {() => this.getData('mybubbles')}>get bubbles datas</button>
                <button onClick={() => this.getData('asbl')}>get asbl datas</button>
                
            </div>
        )
    }
}