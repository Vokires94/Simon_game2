import React, { Component } from 'react';
import global from './Global_Config.js'

function End_game(){
    global[0].res_user=[];
    global[0].user_mas=[];
    global[0].next_level=0;
    global[0].tries=0;

}

export default End_game