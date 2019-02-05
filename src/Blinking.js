import React, { Component } from 'react';
import Randomizer from "./Randomizer";
import buttons from './Buttons_count.js'


function Blinking() {
let new_color = Randomizer();
return buttons[new_color].color;
}

export default Blinking