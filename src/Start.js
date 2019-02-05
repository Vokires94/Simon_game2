import React, { Component } from 'react';
import Blinking from "./Blinking";
import global from './Global_Config.js'
import Round_start from './Round_Start.js'


class Start extends Component {
    constructor(props) {
        super(props);

        this.audio = new Audio(global[0].audio);


    }


    togglePlay() {

        this.audio.play();
    }

    render() {

        return (
            <button disabled={this.props.updateStart_button} id='go_play' onClick={this.timer_func}>Start</button>
        )
    }
    handleStartBlink = () =>{
        let properties = this.props;
        properties.Startagain(this.timer_func);
        let blink = Blinking();
        properties.updateData(blink);
        this.togglePlay();
        Round_start(blink);
        setTimeout(function() {
            properties.updateData('pink');
        }, 2000-global[0].difficult);


    }

    timer_func = () => {
        let properties = this.props;
        properties.updateButton_enable(true);
        properties.updateReset_enable(true);
        properties.updateText('Remember combination!');
        properties.updateMusic(false);
        this.props.updateStart_next(true);

        var timer = setInterval(this.handleStartBlink, 3000-global[0].difficult);

        setTimeout(function() {
            clearInterval(timer)}, 15000+global[0].next_level*3000-global[0].difficult*(global[0].round+global[0].next_level));

        setTimeout(() => {

            properties.updateButton_enable(false);

            properties.updateReset_enable(false);

            properties.updateText('Tip chosen buttons');

            properties.updateMusic(true);



        }, 17000+global[0].next_level*3000-global[0].difficult*(5+global[0].next_level));

    }
}

export default Start