import React from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = ({messages, thisUser}) => {
    const style = {
        backgroundColor: '#eaeaea',
        padding: 15,
        height: '420px',
        overflowY:'scroll',
        display:'flex',
        flexDirection:'column'
    };

    const msgs = messages.map((message, i) =>
        <ChatMessage key={i} message={message} thisUser={thisUser} />
    );

    return (
        <div style={style}>
            {msgs}
        </div>
    ); 
}

export default ChatHistory;