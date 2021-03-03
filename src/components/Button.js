import React from 'react';

const URL = 'https://api.datamuse.com/words?';
const QUERY_PARAMS = 'rel_rhy=eh';
// const TEST_WORDS = ['butter', 'tub', 'egg', 'friend', 'vagrant', 'ratio', 'lively', 'peacock', 'indigo', 'petulant', 'cabbage', 'fathom', 'awkward', 'maroon', 'radius', 'ambition',
//  'yolk', 'perpendicular', 'correct', 'fortune', 'vague', 'nihilist', 'obvious', 'rattan', 'cowboy'];

class Button extends React.Component {

  // Sequence for word generation:
  //   * Set length of phrase using Math.random (i.e. min 1, max 6 etc)
  //   * If length is 1, find word related to x or that sounds like x or rhymes with x (where x is cross-referenced against JS data file of test words?)
  //   * If length is > 1

  getRandomIx(arr) {
    // Method to select random index position from the TEST_WORDS array
    return Math.floor(Math.random() * Math.floor(arr.length-1));
  }

  async onClick() {
    try {
      let response = await fetch(URL + QUERY_PARAMS);
      if (response.ok) {
        let result = await response.json();
        if (result.length > 1) {
          let randomWord = result[this.getRandomIx(result)];
          this.props.addWords(randomWord.word);
        } else {
          this.props.addWords(result.word);
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
