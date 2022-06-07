import React from "react";
import './Message.css';

function Message({mess}) {
    return (
        <h1 className='mainMessage'>{mess}</h1>
    )
}

export default Message
