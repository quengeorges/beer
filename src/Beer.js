import React from 'react';

class Beer extends React.Component {
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
    if (randomBeer){
        return (
            <div>
              <div>
                  {randomBeer[0].name}
                  <img src={randomBeer[0].image_url} width='50px'/>
              </div>
            </div>
        );
    }
    else{
        return(
            <div/>
        )
    }
  }
}

export default Beer;
