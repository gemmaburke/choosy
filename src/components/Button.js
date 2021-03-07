import React from 'react';

const URL = 'https://api.datamuse.com/words?';
const QUERY_PARAMS = ['sl', 'sp', 'rel_rhy', 'rel_jjb', 'rel_trg'];
const TEST_WORDS = ['butter', 'tub', 'egg', 'friend', 'vagrant', 'ratio', 'lively', 'peacock', 'indigo', 'petulant', 'cabbage', 'fathom', 'awkward', 'maroon', 'radius', 'ambition',
 'yolk', 'perpendicular', 'correct', 'fortune', 'vague', 'nihilist', 'obvious', 'rattan', 'cowboy'];

class Button extends React.Component {

  getRandomIx(arr) {
    // Method to select random index position from the TEST_WORDS array
    return Math.floor(Math.random() * Math.floor(arr.length-1));
  }

  async onClick() {
    let firstWord = TEST_WORDS[this.getRandomIx(TEST_WORDS)];
    let query = QUERY_PARAMS[this.getRandomIx(QUERY_PARAMS)];

    try {
      let response = await fetch(URL + query + '=' + firstWord);
      if (response.ok) {
        let result = await response.json();
        if (result.length > 1) {
          let randomWord = result[this.getRandomIx(result)];
          this.props.addWords([firstWord, randomWord.word]);
        } else {
          this.props.addWords([firstWord, result.word]);
        }
        // add a conditional for 0 results? To be tested

      } else {
        console.log('ERROR:', response.status, response.statusText);
      }

    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="Button">
        <button type="button" onClick={() => this.onClick()}>SPIN IT</button>
      </div>
    );
  }
}

export default Button;
