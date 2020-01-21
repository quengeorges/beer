import React from 'react'
import ItemList from "../Components/ItemList";
import {addFav} from "../actions";
import {connect} from "react-redux";

class Liste extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers/ ")
            .then((res) => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    addToFavorite(item) {
        let favs = localStorage.getItem('Favori');
        favs = favs == null ? [] : JSON.parse(favs);
        favs.push(item);
        localStorage.setItem('Favori', JSON.stringify(favs));
        document.querySelector(`#button-${item.id}`).classList.add('inactive');
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div className="liste">
                    <p>{this.props.title}</p>
                    {items.map(item => (
                        <div key={item.id}>
                            <ItemList item={item}/>
                            <button onClick={() => this.addToFavorite(item)}  id={`button-${item.id}`} key={`button-${item.id}`}>add</button>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default connect()(Liste);

