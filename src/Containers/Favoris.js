import React from 'react'
import Beer from "../Components/Beer";
import ItemList from "../Components/ItemList";

class Favoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
       this.setState({items: JSON.parse(localStorage.getItem('Favori'))})
    }

    removeToFavorite(id) {
        let favs = localStorage.getItem('Favori');
        favs = favs == null ? [] : JSON.parse(favs);
        for(let i = 0; i < favs.length; i++) {
            if (favs[i].id == id) {
                favs.splice(i, 1)
            }
        }
        localStorage.setItem('Favori', JSON.stringify(favs));
        this.setState({items: JSON.parse(localStorage.getItem('Favori'))})
    }

    render() {
        const { items } = this.state;
        return(
            <div className="random">
                {items.map(item => (
                    <div key={item.id}>
                        <ItemList item={item}/>
                        <button onClick={() => this.removeToFavorite(item.id)}  key={`button-${item.id}`}>remove</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Favoris;

