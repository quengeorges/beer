import React from 'react';
import VueRandom from './VueRandom';
import VueListe from './VueListe';
import VueFav from './VueFav';
import { Menu, MenuItem } from '@material-ui/core';

class VueMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vue: 0
        };
    }

    handleClose = () => {
    }
    
    render(){
        const { vue } = this.state
        const currentVue = ({
            0: <VueRandom/>,
            1: <VueListe/>,
            2: <VueFav/>
        })[vue]
        return (
            <div>
                <Menu id="simple-menu">
                    <MenuItem onClick={this.handleClose} id='0'>Random</MenuItem>
                    <MenuItem onClick={this.handleClose} id='1'>Liste</MenuItem>
                    <MenuItem onClick={this.handleClose} id='2'>Favoris</MenuItem>
                </Menu>
                { currentVue }
            </div>
        );
    }
}

export default VueMain;
