import React, { Component } from 'react';

class Reset extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button disabled={this.props.disabled} id='reset_button' onClick={this.handleReset}>Reset</button>
        )
    }
}

    export default Reset