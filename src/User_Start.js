import React, { Component } from 'react';
import global from './Global_Config.js'
import Round_Analyse from './Round_Analyse'
function User_Start(color){

    global[0].tries++;
    if(global[0].tries<global[0].round+global[0].next_level){
        console.log(color,'-----');
        global[0].user_mas.push(color);
        console.log(global[0].user_mas);
    }
    else
    {
        global[0].user_mas.push(color);
        console.log(global[0].user_mas);
        Round_Analyse()
    }


}

export default User_Start