import React from "react";
import {connect} from 'react-redux';

import { Button, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class favoriteToggle extends React.Component {

    constructor(props) {
        super(props);
        this.item = this.props.item !== undefined ? this.props.item : null;
    }

    toggle = () => {
        const action = { type: "TOGGLE_FAVORITE", value: this.item };
        this.props.dispatch(action);
    };

    render() {

        return (

            <div>
                <Button
                    variant={this.props.favoritesFilm.findIndex(item => item.id === this.item.id) !== -1 ? 'danger' : 'primary'}
                    onClick={() => this.toggle()}>
                    {this.props.favoritesFilm.findIndex(item => item.id === this.item.id) !== -1 ? 'Remove Favorite' : 'Add Favorite'}
                </Button>
            </div>

        )

    }

}


const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesBeer
    }
}

export default connect(mapStateToProps)(favoriteToggle)
