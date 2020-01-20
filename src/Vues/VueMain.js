import React from 'react';
import VueRandom from './VueRandom';
import VueListe from './VueListe';
import VueFav from './VueFav';

class VueMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vue: 0
        };
    }
    
    render(){
        const { vue } = this.state
        return (
            ({
                0: <VueRandom/>,
                1: <VueListe/>,
                2: <VueFav/>
            })[vue]
        );
    }
}

export default VueMain;
