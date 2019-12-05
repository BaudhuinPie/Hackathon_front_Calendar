import React, { Component } from 'react';
import                           './App.css';
import { Switch, Route }    from 'react-router-dom';
import Bulle                from './components/Bulle/Bulle';
import HomePage             from './components/HomePage/HomePage'

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            days: [{
                key: 1,
                likes: 124,
                customisationPersonnelle : 'Ceci est ma customisation',
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 2,
                likes: 124,
                customisationPersonnelle : 'Ceci est ma customisation',
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 3,
                likes: 124,
                customisationPersonnelle : 'Ceci est ma customisation',
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            }]
        }
    }

    handleClickToLike = () => {
        this.setState({clicked : true});
    }


    render() { 
    return ( 
        <div>
            <Switch>
                <Route
                    exact 
                    path='/'
                    render={(props) => < HomePage
                    days={this.state.days}
                    selectLike={() => this.handleClickToLike()}
                    component={HomePage} />}
                />
                <Route 
                    path='/Bulle'
                
                    render={(props) => < Bulle  days={this.state.days}/>
                    }
                />
            </Switch>
        </div>
    );
  }
}
 
export default App;