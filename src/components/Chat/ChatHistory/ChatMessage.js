import React from 'react';

const ChatMessage = ({ message, thisUser }) => {

    const style = {
        display: 'block',
        margin: '5px 0'
    };

    const isMe = thisUser.name === message.user.name;
    const floatDirection = isMe ? 'right' : 'left'
    const nameColor = isMe ? 'green' : 'red';
    const margin = isMe ? ' 0 0 0 40px': '0 40px 0 0 ';
    
    const textStyle = {
        float: floatDirection,
        backgroundColor: '#fff',
        padding: '6px 10px',
        borderRadius: '15px',
        margin: margin,
        textAlign:'left'
    }

    const nameStyle = {
        color: nameColor,
        float: floatDirection
    }

    return (
        <div style={style}>
            <span style={textStyle}><span style={nameStyle}>{message.user.name}</span><br /> {message.data}</span>
        </div>
    );
}

export default ChatMessage;