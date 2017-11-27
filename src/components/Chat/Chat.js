import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';
import Divider from 'material-ui/Divider';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: props.messages,
            thisUser: props.thisUser
        }

    }

    render() {
        const styles = {
            height: 500,
            width: 500,
            textAlign: 'center',
            margin: '20px auto',
            position: 'relative'
        };
        return (
            <Paper style={styles} zDepth={2} >
                <ChatHistory messages={this.state.messages} />
                <Divider />
                <SendMessage thisUser={this.props.thisUser} />
            </Paper>
        );
    }
}

export default Chat;