import React from 'react';
import Beers from '../Beers';
import {connect} from "react-redux";

class VueFav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Beers
              beers={this.props.favoritesFilm} />
        </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesBeer
  }
}

export default connect(mapStateToProps)(VueFav)
