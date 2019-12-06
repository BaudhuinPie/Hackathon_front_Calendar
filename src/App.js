import React, { Component } from 'react';
import                           './App.css';
import { Switch, Route }    from 'react-router-dom';
import Bulle                from './components/Bulle/Bulle';
import HomePage             from './components/HomePage/HomePage'



// const isClicked = this.state.days.filter(this.handleClickToLike() {
//     return ;

// });

const url = window.location.href;

class App extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            days: [{
                key: 1,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 2,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 3,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 4,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 5,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 6,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 7,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 8,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 9,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 10,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 11,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 12,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            },{
                key: 13,
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false 
            }]
        }
    }

    handleClickToLike = (index) => {
        let daysUpdated = this.updateDays(this.state.days, index)

        //this.setState({clicked : true});
        this.setState({
            days : daysUpdated
        })
    }

    updateDays = (days, index) => {
        let arrayDays = [...days];
        arrayDays[index].clicked = true;

        return arrayDays
    }

    memoryKey = () => {

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
                    selectLike={this.handleClickToLike}
                    component={HomePage} />}
                />
                <Route 
                    path='/Bulle/:id'
                
                    render={(props) => < Bulle days={this.state.days} url={url}/>
                    }
                />
            </Switch>
        </div>
    );
  }
}
 
export default App;