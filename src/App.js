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
            transIndex:1,
            days: [{
                key: 1,
                image: "https://cdn.pixabay.com/photo/2016/01/19/17/17/christmas-tree-1149619_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: true,
                asbl:{
                    name: "WWF",
                    url: "https://wwwf.be",
                    description: "Depuis plus de 50 ans, le WWF protège le règne animal. Les espèces sauvages sont indispensables à l’équilibre de la nature.",
                    image: ""}
            },{
                key: 2,
                image: "https://cdn.pixabay.com/photo/2018/11/29/20/47/christmas-background-3846456_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/_aU_7iy-_NI?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false, 
                passed: true,
                asbl:{
                    name:"S(R)PA - Société Royale Protectire des Animaux",
                    url: "https://www.veeweyde.be/",
                    description: "La Société Royale Protectrice des Animaux Veeweyde est la plus importante et la plus ancienne société de protection animale de Belgique. Nous hébergeons près d’un millier d’animaux répartis dans nos quatre centres d’accueils à Bruxelles (Anderlecht), Tournai, Turnhout et Coutisse",
                    image: ""}
            },{
                key: 3,
                image: "https://cdn.pixabay.com/photo/2015/11/25/22/50/christmas-balls-1063070__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/uNWtAUYIf4E&t=27s?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: true,
                asbl:
                    {
                        name: "Croix Rouge de Belgique",
                        url: "https://www.croix-rouge.be/",
                        description: "Acteur de référence dans le domaine de l'action humanitaire, la Croix-Rouge de Belgique mène un combat de tous les instants pour soulager la souffrance des hommes et prévenir les crises humanitaires.",
                        image: ""}
            },{
                key: 4,
                image: "https://cdn.pixabay.com/photo/2015/12/07/20/09/the-christmas-tree-1081323__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/bzZEH_5OuIs&t=28s?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: true,
                asbl:  {
                    name: "La ligue contre le cancer",
                    url: "https://www.ligue-cancer.net/",
                    description: "En initiant et finançant des projets de recherche, la Ligue suscite des avancées importantes dans le traitement et la qualité de vie des personnes malades. La recherche en oncologie que nous soutenons concerne différents pôles : la recherche fondamentale, la recherche clinique, la recherche épidémiologique et les sciences humaines et sociales.",
                    image: ""}
            },{
                key: 5,
                image: "https://cdn.pixabay.com/photo/2016/12/08/12/00/christmas-balls-1891598__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/823jb0ce9iQ?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: true,
                asbl: {
                    name: "Amnesty International",
                    url: "https://www.amnesty.be/",
                    description: "Amnesty International est un mouvement mondial de personnes qui luttent pour les droits humains. Il intervient au nom des victimes de violations de ces droits, en se basant sur une recherche impartiale et sur le droit international. L’organisation est indépendante de tout gouvernement, idéologie politique, intérêt économique ou religion.",
                    image: ""}
            },{
                key: 6,
                image: "https://cdn.pixabay.com/photo/2015/12/11/14/00/christmas-village-1088143__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:{
                    name: "WWF",
                    url: "https://wwwf.be",
                    description: "Depuis plus de 50 ans, le WWF protège le règne animal. Les espèces sauvages sont indispensables à l’équilibre de la nature.",
                    image: ""}
            },{
                key: 7,
                image: "https://cdn.pixabay.com/photo/2017/12/12/16/26/christmas-3015043__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:{
                    name:"S(R)PA - Société Royale Protectire des Animaux",
                    url: "https://www.veeweyde.be/",
                    description: "La Société Royale Protectrice des Animaux Veeweyde est la plus importante et la plus ancienne société de protection animale de Belgique. Nous hébergeons près d’un millier d’animaux répartis dans nos quatre centres d’accueils à Bruxelles (Anderlecht), Tournai, Turnhout et Coutisse",
                    image: ""}
            },{
                key: 8,
                image: "https://cdn.pixabay.com/photo/2017/12/25/17/30/merry-christmas-3038764_960_720.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:  {
                    name: "La ligue contre le cancer",
                    url: "https://www.ligue-cancer.net/",
                    description: "En initiant et finançant des projets de recherche, la Ligue suscite des avancées importantes dans le traitement et la qualité de vie des personnes malades. La recherche en oncologie que nous soutenons concerne différents pôles : la recherche fondamentale, la recherche clinique, la recherche épidémiologique et les sciences humaines et sociales.",
                    image: ""}
            },{
                key: 9,
                image: "https://cdn.pixabay.com/photo/2019/11/28/18/52/birthday-4659830__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:{
                    name: "WWF",
                    url: "https://wwwf.be",
                    description: "Depuis plus de 50 ans, le WWF protège le règne animal. Les espèces sauvages sont indispensables à l’équilibre de la nature.",
                    image: ""}
            },{
                key: 10,
                image: "https://cdn.pixabay.com/photo/2013/12/18/15/13/christmas-tree-230269__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:{
                    name:"S(R)PA - Société Royale Protectire des Animaux",
                    url: "https://www.veeweyde.be/",
                    description: "La Société Royale Protectrice des Animaux Veeweyde est la plus importante et la plus ancienne société de protection animale de Belgique. Nous hébergeons près d’un millier d’animaux répartis dans nos quatre centres d’accueils à Bruxelles (Anderlecht), Tournai, Turnhout et Coutisse",
                    image: ""}
            },{
                key: 11,
                image: "https://cdn.pixabay.com/photo/2018/12/07/14/35/background-3861739__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:{
                    name: "WWF",
                    url: "https://wwwf.be",
                    description: "Depuis plus de 50 ans, le WWF protège le règne animal. Les espèces sauvages sont indispensables à l’équilibre de la nature.",
                    image: ""}
            },{
                key: 12,
                image: "https://cdn.pixabay.com/photo/2012/03/04/00/25/background-21920__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:  {
                    name: "La ligue contre le cancer",
                    url: "https://www.ligue-cancer.net/",
                    description: "En initiant et finançant des projets de recherche, la Ligue suscite des avancées importantes dans le traitement et la qualité de vie des personnes malades. La recherche en oncologie que nous soutenons concerne différents pôles : la recherche fondamentale, la recherche clinique, la recherche épidémiologique et les sciences humaines et sociales.",
                    image: ""}
            },{
                key: 13,
                image: "https://cdn.pixabay.com/photo/2016/12/01/22/54/christmas-heart-1876352__340.jpg",
                likes: 124,
                customisationPersonnelle : "https://www.youtube.com/embed/O209XqBZVE0?autoplay=1",
                prixAssociation : 5,
                asblInfo : 'Ceci est une présentation de l\'asbl',
                clicked: false ,
                passed: false,
                asbl:
                {
                    name: "Croix Rouge de Belgique",
                    url: "https://www.croix-rouge.be/",
                    description: "Acteur de référence dans le domaine de l'action humanitaire, la Croix-Rouge de Belgique mène un combat de tous les instants pour soulager la souffrance des hommes et prévenir les crises humanitaires.",
                    image: ""}
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
        arrayDays[index-1].clicked = true;
        arrayDays[index-1].likes =  arrayDays[index].likes + 1 ; 

        return arrayDays
    }


    recovIndex= (num) => {
        this.setState({transIndex: num});
        console.log(num, "recevie num")
    }

    componentDidUpdate() {
        console.log("liked!")
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
                    transIndex = {this.recovIndex}
                    selectLike={this.handleClickToLike}
                    component={HomePage} />}
                />
                <Route 
                    path='/Bulle/:id'
                
                    render={(props) => < Bulle days={this.state.days} url={this.state.transIndex}/>
                    }
                />
            </Switch>
        </div>
    );
  }
}
 
export default App;