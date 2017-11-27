import React, { Component } from 'react';

const ChatMessage = ({message}) => {

    const style = {
        display: 'block',
        height: '40px'
    };

    const textStyle = {
        float: 'right',
        backgroundColor: '#fff',
        padding: '6px 10px',
        borderRadius: '15px'
    }

    return (
        <div style={style}>
            <span style={textStyle}>{message.data}</span>
        </div>
    );
}

export default ChatMessage;