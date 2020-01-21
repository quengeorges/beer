import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, GridList } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './VueListe.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 140,
    maxWidth: 30,
    marginLeft: '40%'
  },
  descri: {
    textAlign: "justify",
  },
});
  
export default function VueListe() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/')
      .then(res => res.json())
      .then((data) => {
        setBeers(data)
      })
      .catch(console.log)
  }, [])
  const classes = useStyles();
  console.log(beers)
  return (
    <GridList cellHeight={450} className={classes.gridList} cols={3}>
      {beers.map(item => (
        <Card className={classes.card} key={item.id}>
          <CardMedia
            className={classes.media}
            image={item.image_url}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.descri}>
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </GridList>
  );
}

