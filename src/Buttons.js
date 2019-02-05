import React, { Component } from 'react';
import buttons from './Buttons_count.js'
import User_Start from './User_Start.js'

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
                    onClick={() => User_Start(item.color)}
                >{item.id}</Button>
            ))}
    </div>)
}


}

export default Buttons