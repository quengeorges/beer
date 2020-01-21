import React from 'react'
import Beer from "../Components/Beer";
import PropTypes from "prop-types";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: false,
            error: null
        }
    }

    componentDidMount() {
        const {id}  = this.props.match.params;
        console.log(id);
        fetch(`https://api.punkapi.com/v2/beers/${id} `)
            .then((res) => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result[0]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, item} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="liste">
                    <p>{this.props.title}</p>
                    <Beer item={item}/>
                </div>
            );
        }
    }
}

View.PropType = {
    item: PropTypes.object
};

export default View;

