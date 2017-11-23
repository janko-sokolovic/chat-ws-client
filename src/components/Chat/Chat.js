import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ChatHistory from './ChatHistory/ChatHistory';
import SendMessage from './SendMessage/SendMessage';
import Divider from 'material-ui/Divider';
import Singleton from '../../socket';

class Chat extends Component {

    constructor(props) {
        super(props);

        this.socket = Singleton.getInstance();

        this.state = {
            messages: []
        }

        this.socket.onmessage = (response) => {
            let messages = this.state.messages;
            messages.push(JSON.parse(response.data));
            this.setState({ messages: messages });
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
                <SendMessage />
            </Paper>
        );
    }
}

export default Chat;