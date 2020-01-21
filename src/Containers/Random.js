import React from 'react'
import Beer from "../Components/Beer";

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null
        }
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers/random ")
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
                <div className="random">
                    <p>{this.props.title}</p>
                    <Beer item={item}/>
                </div>
            );
        }
    }
}

export default Random;

