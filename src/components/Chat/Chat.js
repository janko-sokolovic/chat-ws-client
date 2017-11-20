import React, { Component } from 'react';
import './Chat.css';

import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';

class Chat extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="Chat">
                <ChatHistory />
                <SendMessage />
            </div>
        );
    }
}

export default Chat;