import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

class ChatHistory extends Component {
    render() {
        const style = {
            backgroundColor: '#eaeaea',
            padding: 15,
            height:'420px'
        };
        return (
            <div style={style}>
                <ChatMessage />
                <ChatMessage />
            </div>
        );
    }
}

export default ChatHistory;