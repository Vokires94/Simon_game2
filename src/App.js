import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons.js'
import Reset from './Reset.js'
import Start from './Start.js'
import Change_level from './Change_level.js'
import global from "./Global_Config";


class App extends Component{
    constructor(props){
        super(props);

        this.audio2 = new Audio(require('./The_Doors.mp3'));
        this.audio2.play();
        this.audio2.loop=true;

        this.state = {

            isStart:'pink',
            isText:'Let\'s play. Click on Start.',
            isReset:true,
            isButton:true,
        }
    }
    updateMusic = (value) => {

            if(!value){this.audio2.pause();}else {this.audio2.play();}

    }


    updateData = (value) => {
        if(value){
        this.setState({ isStart: value })

        }
    }

   updateText = (value) => {
        if(value){
            this.setState({ isText: value })

        }
    }
    updateReset_enable = (value) => {
            this.setState({ isReset: value })

    }
    updateButton_enable = (value) => {
        this.setState({ isButton: value })

    }





    render() {

        return(

        <div id="center" style={{ 'text-align': 'center' }}>
            <Buttons blink_but={this.state.isStart} updateButton_enable={this.state.isButton} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span id='message_user'>{this.state.isText}</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Start updateMusic = {this.updateMusic} updateData={this.updateData} updateText={this.updateText}
                   updateReset_enable={this.updateReset_enable} updateButton_enable={this.updateButton_enable}/>
            <Change_level/>
            <Reset disabled={this.state.isReset}/>

        </div>
        )
    }
}

export default App;
