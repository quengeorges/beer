import React from 'react';
import FavoriteToggle from "./components/FavoriteToggle";

class Beers extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.beers);

    this.state = {
      beers: this.props.beers !== undefined ? this.props.beers : []
    };
  }

  componentDidMount() {

    if (this.props.beers === undefined){

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
      <ul>
        {beers.map(item => (
          <li key={item.id}>

            {item.name}

            <FavoriteToggle
              item={item} />

          </li>
        ))}
      </ul>
    );
  }
}

export default Beers;
