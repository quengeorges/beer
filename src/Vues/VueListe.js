import React from 'react';
import Beers from '../Beers';

class VueListe extends React.Component {
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
    return (
        <div>
            <Beers/>
        </div>
    );

  }
}

export default VueListe;
