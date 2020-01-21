import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class ItemList extends React.Component {
    render() {
        return (
            <div className="view">
                <Link to={ "/view/" + this.props.item.id }>{this.props.item.name}</Link>
            </div>
        );
    }
}

ItemList.propTypes = {
    item: PropTypes.object
};

export default ItemList;

