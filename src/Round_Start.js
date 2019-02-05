import React from 'react';
import global from './Global_Config.js'
function Round_start(props){
    global[0].res_user.push(props);
    console.log(global[0].res_user);

}

export default Round_start