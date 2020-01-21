import React from 'react';

import { Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import FavoriteToggle from "./components/FavoriteToggle";

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

    if (randomBeer){
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src={randomBeer[0].image_url}
                        style={{
                            height: '180px',
                            width: '100%',
                            display: 'block',
                            objectFit: 'contain',
                            backgroundColor: '#ada5a5'
                        }} />
                    <Card.Body>
                        <Card.Title>{randomBeer[0].name}</Card.Title>
                        <Card.Text>
                            {randomBeer[0].description}
                        </Card.Text>
                        <FavoriteToggle
                            item={randomBeer[0]} />
                    </Card.Body>
                </Card>
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
