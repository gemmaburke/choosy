import React from 'react';
import Button from './components/Button';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
      the: false
    };
  }

  addWords(result) {
    let randomBoolean = Math.random() < 0.5;
    if (randomBoolean) {
      this.setState({words: result, the: true})
    } else {
      this.setState({words: result, the: false});
    }
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
                  <h2 className="results">
                    {
                      this.state.the
                      ? 'The '
                      : <></>
                    }
                    {this.state.words[1]} {this.state.words[0]}
                  </h2>
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
