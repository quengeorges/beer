import React from 'react';
import Beers from '../Beers';

class VueFav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Beers
              fav={true} />
        </div>
    );

  }
}

export default VueFav
