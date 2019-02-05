import React, { Component } from 'react';
import global from "./Global_Config";

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button disabled={this.props.disabled} id='reset_button' onClick={this.handleReset}>Reset</button>
        )
    }

    handleReset = ()=>{
        global[0].res_user=[];
        global[0].user_mas=[];
        global[0].next_level=0;
        global[0].tries=0;
        global[0].points=0;
        this.props.updateReset_enable(true);
        this.props.updateStart_button(false);
        this.props.updateText('Let\'s play. Click on Start.');

    }
}

    export default Reset