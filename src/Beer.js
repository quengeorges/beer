import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    const classes = makeStyles({
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
    const { randomBeer } = this.state
    console.log('randomBeer', randomBeer)
    if (randomBeer){
        return (
            <div>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={'"' + randomBeer[0].image_url + '"'}
                  title={randomBeer[0].name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {randomBeer[0].name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {randomBeer[0].description}
                  </Typography>
                </CardContent>
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
