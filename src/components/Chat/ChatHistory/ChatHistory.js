import React, { Component } from 'react';
import ChatMessage from './ChatMessage';

class ChatHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: props.messages
        }
    }

    render() {
        const style = {
            backgroundColor: '#eaeaea',
            padding: 15,
            height: '420px'
        };

        const messages = this.state.messages.map((message, i) =>
            <ChatMessage key={i} message={message} />
        );

        return (
            <div style={style}>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;