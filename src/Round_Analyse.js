import React, { Component } from 'react';
import global from './Global_Config.js'
import End_game from './End_game.js'

function Round_Analyse(){
let win=true;
    for(let i=0;i<global[0].round+global[0].next_level;i++){
        if(global[0].res_user[i]!==global[0].user_mas[i])
        {
            console.log('Mistake');
            win=false;
            End_game();

            break;}
        else{
            global[0].points++;

        }
    }
    if(win!==false){
        console.log('Right');
    }


}
export default Round_Analyse