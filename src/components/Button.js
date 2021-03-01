import React from 'react';

const URL = 'https://api.datamuse.com/words?';
const QUERY_PARAMS = 'rel_rhy=forgetful';

class Button extends React.Component {

  // Sequence for word generation:
  //   * Set length of phrase using Math.random (i.e. min 1, max 6 etc)
  //   * If length is 1, find word related to x or that sounds like x or rhymes with x (where x is cross-referenced against JS data file of test words?)
  //   * If length is > 1

  async onClick() {
    try {
      let response = await fetch(URL + QUERY_PARAMS);
      if (response.ok) {
        let result = await response.json();
        // this.setState({noun: result.noun});
        console.log(result);
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
