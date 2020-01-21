import React from 'react'
import PropTypes from 'prop-types';

class Beer extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.item.name}</p>
                <img src={this.props.item.image_url} alt=""/>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}

Beer.propTypes = {
  item: PropTypes.object
};

export default Beer;