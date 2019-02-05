import React, { Component } from 'react';
import buttons from './Buttons_count.js'
import global from "./Global_Config";


const Button = ({ className, children, onClick, color, disabled }) => (
    <button
        disabled={disabled}
        className={className}
        onClick={onClick}
        style={{ backgroundColor: color }}
    >
        {children}
    </button>
);


class Buttons extends Component{
    constructor(props){
        super(props);

}

render() {

let change = this.props;

    return (<div>
            {buttons.map(item => (
                <Button
                    disabled={change.updateButton_enable}
                    key={item.id}
                    className={item.id}
                    color={change.blink_but!==item.color ? item.color : 'pink'}
                    onClick={()=>this.User_Start(item.color)}
                >{item.id}</Button>
            ))}
    </div>)
}

    User_Start(color){

        global[0].tries++;
        if(global[0].tries<global[0].round+global[0].next_level){
            //console.log(color,'-----');
            global[0].user_mas.push(color);
            console.log(global[0].user_mas);
        }
        else
        {
            global[0].user_mas.push(color);
            console.log(global[0].user_mas);
            this.Round_Analyse()
        }


    }

    Round_Analyse(){
        let properties = this.props;

        let win=true;
        for(let i=0;i<global[0].round+global[0].next_level;i++){
            if(global[0].res_user[i]!==global[0].user_mas[i])
            {
                //console.log('Mistake');
                win=false;
                this.End_game();

                break;}
            else{
                global[0].points++;

            }
        }
        if(win!==false){
            //console.log('Right');
            global[0].res_user=[];
            global[0].user_mas=[];
            global[0].tries=0;
            global[0].next_level++;
            setTimeout(() => {
                properties.Startagain();
            },3000);

            properties.updateText(`Prepare for round ${1+global[0].next_level}.`);


        }


    }

    End_game(){
        let properties = this.props;
        properties.updateStart_button(false);
        properties.updateReset_enable(true);
        properties.updateText(`Sorry you lose. You have earned ${global[0].points===1? '1point' : global[0].points+'points'}. Press start to try again.`);

        global[0].res_user=[];
        global[0].user_mas=[];
        global[0].next_level=0;
        global[0].tries=0;
        global[0].points=0;

    }

}

export default Buttons