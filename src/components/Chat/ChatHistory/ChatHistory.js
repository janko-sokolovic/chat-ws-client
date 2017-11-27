import React from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({messages}) => {
    const style = {
        backgroundColor: '#eaeaea',
        padding: 15,
        height: '420px',
        overflowY:'scroll'
    };

    const msgs = messages.map((message, i) =>
        <ChatMessage key={i} message={message} />
    );

    return (
        <div style={style}>
            {msgs}
        </div>
    ); 
}

export default ChatHistory;