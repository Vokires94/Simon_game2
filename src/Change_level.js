import React, { Component } from 'react';
import global from './Global_Config.js'

class Change_level extends Component {
    constructor(props) {
        super(props);
        this.state={
            Level_has_changed:false
        }
    }

    render() {
        return (
            <button id='change_level' onClick={this.handleLevelChange}>{this.state.Level_has_changed ?  'Hard' : 'Easy'}</button>
        )
    }
    handleLevelChange = () =>{

        !this.state.Level_has_changed ? global[0].difficult=1500 : global[0].difficult=0;
this.setState({Level_has_changed:!this.state.Level_has_changed})
        console.log(global[0]);

    }
}



export default Change_level