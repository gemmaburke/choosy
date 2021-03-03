import React from 'react';
import Button from './components/Button';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  addWords(result) {
    this.setState({words: result});
    console.log('Added words!', result, 'State update!', this.state.words);
  }

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
            <Button addWords={(result) => this.addWords(result)}/>
            <br/>
            {
              this.state.words.length > 0
              ? <div>
                  <p>Your band name is...</p>
                  <h2>{this.state.words}</h2>
                </div>
              : <></>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
