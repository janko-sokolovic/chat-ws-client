import React from 'react';
import Paper from 'material-ui/Paper';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';
import Divider from 'material-ui/Divider';

const Chat = ({ messages, thisUser }) => {
    const styles = {
        height: 500,
        width: 500,
        textAlign: 'center',
        margin: '20px auto',
        position: 'relative'
    };
    return (
        <Paper style={styles} zDepth={2} >
            <ChatHistory messages={messages} />
            <Divider />
            <SendMessage thisUser={thisUser} />
        </Paper>
    );
}

export default Chat;