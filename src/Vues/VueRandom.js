import React from 'react';
import Beer from '../Beer';

class VueRandom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Beer/>
        </div>
    );

  }
}

export default VueRandom;
