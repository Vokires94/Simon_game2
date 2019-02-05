import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons.js'
import Reset from './Reset.js'
import Start from './Start.js'
import Change_level from './Change_level.js'



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
            isStartButton:false,
            Startnew:function(){}
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
    updateStart_button = (value) => {
        this.setState({ isStartButton: value })

    }
    Startagain = (value) => {
        this.setState({ Startnew: value })

    }





    render() {

        return(

        <div id="center" style={{ 'text-align': 'center' }}>
            <Buttons blink_but={this.state.isStart} updateButton_enable={this.state.isButton}
                     updateReset_enable={this.updateReset_enable} updateStart_button={this.updateStart_button}
                     updateText={this.updateText} Startagain={this.state.Startnew}/>
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
                   updateReset_enable={this.updateReset_enable} updateButton_enable={this.updateButton_enable}
                   updateStart_button={this.state.isStartButton} updateStart_next={this.updateStart_button}
                   Startagain={this.Startagain}
            />
            <Change_level/>
            <Reset disabled={this.state.isReset} updateReset_enable={this.updateReset_enable}
                   updateStart_button={this.updateStart_button} updateText={this.updateText}/>

        </div>
        )
    }
}

export default App;
