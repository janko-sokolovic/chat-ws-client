import React, { Component } from 'react';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';

class Chat extends Component {

    render() {

        const styles = {
            height: 500,
            width: 500,
            margin: 20,
            padding:10,
            textAlign: 'center',
            margin: '0 auto',
            backgroundColor:'#eaeaea'
        };
        return (
            <div className="Chat" style={styles}>
                <ChatHistory />
                <SendMessage />
            </div>
        );
    }
}

export default Chat;