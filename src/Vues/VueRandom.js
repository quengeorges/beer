import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
  },
  media: {
    height: 340,
    maxWidth: 90,
    marginLeft: '40%'
  }
});

export default function VueRandom() {
  const [randomBeer, setRandomBeer] = useState(null)

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(res => res.json())
      .then((data) => {
        setRandomBeer(data)
      })
      .catch(console.log)
  }, [])
  const classes = useStyles();
  console.log(randomBeer)
  if (randomBeer) {
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={randomBeer[0].image_url}
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
    );
  }
  else {
    return (
      <div />
    )
  }
}
