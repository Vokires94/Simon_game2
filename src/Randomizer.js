import React, { Component } from 'react';
import buttons from './Buttons_count.js'


function Randomizer() {

    return Math.floor(Math.random() * buttons.length);
}

export default Randomizer