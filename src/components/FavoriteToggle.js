import React from "react";
import {connect} from 'react-redux';

class favoriteToggle extends React.Component {

    constructor(props) {
        super(props);
        this.item = this.props.item !== undefined ? this.props.item : null;
    }

    toggle = () => {
        const action = { type: "TOGGLE_FAVORITE", value: this.item };
        this.props.dispatch(action)
    };

    render() {

        return (

            <div>
                <button onClick={() => this.toggle()}>
                    {this.props.favoritesFilm.findIndex(item => item.id === this.item.id) !== -1 ? 'Remove Favorite' : 'Add Favorite'}
                </button>
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
