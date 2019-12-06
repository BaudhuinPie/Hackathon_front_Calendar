import React from 'react';
import './App.css';
import BackOffice from './components/backoffice/BackOffice';
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
          {/*<InputPOSTserver/>
          <p></p>
          <InputGETserver/> */}
          <BackOffice />
        </header>
      </div>
    );

  }
  
}

export default App;
