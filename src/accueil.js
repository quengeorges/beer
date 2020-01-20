import React from 'react';
import Beers from './Beers';
import Beer from './Beer';

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: null
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ randomBeer: data })
    })
    .catch(console.log)
  }
  render() {
    const { randomBeer } = this.state
    console.log('randomBeer', randomBeer)
    return (
        <div>
            <Beer/>
            <Beers/>
        </div>
    );

  }
}

export default Accueil;
