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
                image: "https://cdn.pixabay.com/photo/2016/01/19/17/17/christmas-tree-1149619_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 2,
                image: "https://cdn.pixabay.com/photo/2018/11/29/20/47/christmas-background-3846456_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 3,
                image: "https://cdn.pixabay.com/photo/2015/11/25/22/50/christmas-balls-1063070__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 4,
                image: "https://cdn.pixabay.com/photo/2015/12/07/20/09/the-christmas-tree-1081323__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 5,
                image: "https://cdn.pixabay.com/photo/2016/12/08/12/00/christmas-balls-1891598__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 6,
                image: "https://cdn.pixabay.com/photo/2015/12/11/14/00/christmas-village-1088143__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 7,
                image: "https://cdn.pixabay.com/photo/2017/12/12/16/26/christmas-3015043__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 8,
                image: "https://cdn.pixabay.com/photo/2017/12/25/17/30/merry-christmas-3038764_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 9,
                image: "https://cdn.pixabay.com/photo/2019/11/28/18/52/birthday-4659830__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 10,
                image: "https://cdn.pixabay.com/photo/2013/12/18/15/13/christmas-tree-230269__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 11,
                image: "https://cdn.pixabay.com/photo/2018/12/07/14/35/background-3861739__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 12,
                image: "https://cdn.pixabay.com/photo/2012/03/04/00/25/background-21920__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

            },{
                key: 13,
                image: "https://cdn.pixabay.com/photo/2016/12/01/22/54/christmas-heart-1876352__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false,

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

    setCustomisation =() => {
        let dayss = this.state.days;
        for(let i = 0; i< dayss.lenght ; i++){
            let propies = dayss[i];
            propies.customisationPersonnelle = "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"
        }
    }

    //==========================
    componentDidMount() {
        this.setCustomisation();
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