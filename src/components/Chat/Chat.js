import React, { Component } from 'react';
import './Chat.css';

import ChatHistory from './ChatHistory';

class Chat extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="Chat">
                <ChatHistory />
            </div>
        );
    }
}

export default Chat;