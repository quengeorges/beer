import React from 'react';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ beers: data })
    })
    .catch(console.log)
  }
  render() {
    const { beers } = this.state;
    return (
      <ul>
        {beers.map(item => (
          <li key={item.id}>
            {item.name} 
          </li>
        ))}
      </ul>
    );
  }
}

export default Beers;
