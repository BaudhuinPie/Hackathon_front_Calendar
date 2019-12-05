import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './components/MovieForm';
import BackOffice from './components/backoffice/BackOffice';
//import MoviesList from './components/MoviesList';

// répuc les datas
// envoyer les datas au serveur via request  http  de type POST

class App extends React.Component {

  render() {
      // onSubmit = syntax de React.
    return (
     <div>
        <header className="App-header">
          <BackOffice />
        </header>
      </div>
    );

  }
  
}

export default App;
