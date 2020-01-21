import React from 'react';
import FavoriteToggle from "./components/FavoriteToggle";
import {connect} from "react-redux";
import { Card, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: this.props.fav !== undefined ? this.props.favoritesFilm : []
    };
  }

  componentDidMount() {

    if (this.props.fav === undefined){

      fetch('https://api.punkapi.com/v2/beers/')
          .then(res => res.json())
          .then((data) => {
            this.setState({ beers: data })
          })
          .catch(console.log)

    }

  }

  render() {

    const { beers } = this.state;

    return (

        <CardColumns>


        {beers.map(item => (

              <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src={item.image_url}
                    style={{
                      height: '180px',
                      width: '100%',
                      display: 'block',
                      objectFit: 'contain',
                      backgroundColor: '#ada5a5'
                    }} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <FavoriteToggle
                      item={item} />
                </Card.Body>
              </Card>

          ))}

        </CardColumns>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesBeer
  }
};

export default connect(mapStateToProps)(Beers)
