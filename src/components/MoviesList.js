// import React from 'react';
// import axios from 'axios'; // ipmporter xios est nécessaire pour fetchinget receip...
// import Movie from './Movie';

// class MoviesList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [ {
//                 title:'Star wary',
//                 year: '2055',
//                 director: 'Billy'
//             },
//             {
//                 title:'Star wary',
//                 year: '2855',
//                 director: 'Billy'
//             },
//             {
//                 title:'Star wary',
//                 year: '2000',
//                 director: 'Billy'
//             }]
//         }
//     }

//     // on code le fonction dans didMount
//     fetchFilms = () => {
//         axios // j'appelle axios addon télérachargé localement
//         .get('http://localhost:5000/api/movies')
//         .then(res => {
//             console.log(" App get Response  fafter Listing ? "+ JSON.stringify(res) );
//             this.setState({
//                 movies: res.data
//             })
//         })
//     }


//     componentDidMount() { // je veux faire un appel à internet . Quelle fonction j'appelle :
//         this.fetchFilms(); // ensuite je définis cette fonction
//     }

//     render(){
//         const {movies} = this.state;

//         return(
//             <div>ceci est une liste
//                 <ul> {/**on peut créer un comosant et l'appler pour faire un élement de la site qui rend plusieurs donnée de façon strucuturée html */}
//                 {movies.map( (movie,index) =>  
//                     //<div key = {index}> {/**il faut ajouter une key pour rendre unique chaque child rendering*/}
//                         //<li>{movie.title}</li>
//                        // <li>{movie.year}</li>
//                         //<li>{movie.director}</li>
//                     //</div>


//                     // <Movie content ={movie} key={index} />
//                     <Movie {...movie} key={index} />

                     
//                 )}
//                 </ul>
                
//             </div>
//         )
//     }
// }

// export default MoviesList;