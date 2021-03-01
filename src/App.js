import React from 'react';
import Button from './components/Button';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="graphic">
            Loading animation to go here on button click
          </div>
          <div className="title">
            <h1>Choosy!</h1>
          </div>
          <div className="selector">
            <h2>The automatic band name generator</h2>
            <Button/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
