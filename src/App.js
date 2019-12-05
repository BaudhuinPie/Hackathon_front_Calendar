import React from 'react';
import logo from './logo.svg';
import './App.css';
//import MovieForm from './components/MovieForm';
//import MoviesList from './components/MoviesList';
import InputGETserver from './components/InputGETserver';
import InputPOSTserver from './components/InputPOSTserver';


// répuc les datas
// envoyer les datas au serveur via request  http  de type POST

class App extends React.Component {

  render() {
      // onSubmit = syntax de React.
    return (
     <div>
        <header className="App-header">
          {/* <MovieForm/> */}
          <InputPOSTserver/>
          <p></p>
          {/* <MoviesList/> */}
          <InputGETserver/>
        </header>
      </div>
    );

  }
  
}

export default App;
