import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Singleton from '../../../socket';
import MessageType from './MessageType';

class SendMessage extends Component {

    constructor(props) {
        super(props);

        this.socket = Singleton.getInstance();

        this.state = {
            inputValue: ''
        }
    }

    render() {
        const styles = {
            position: 'absolute',
            bottom: 0,
            width: '100%'
        };
        const fieldStyle = {
            width: '70%'
        };
        const btnStyles = {
            marginLeft: 25
        };

        return (
            <div style={styles}>
                <TextField
                    hintText="Write message here.."
                    fullWidth={true}
                    style={fieldStyle}
                    value={this.state.inputValue}
                    onChange={this.updateInputValue.bind(this)}
                />
                <RaisedButton style={btnStyles} onClick={this.sendMessage.bind(this)}> Send </RaisedButton>
            </div>
        );
    }

    sendMessage() {
        let messageDto = JSON.stringify({ user: 'Janko', text: this.state.inputValue, type:MessageType.TEXT_MESSAGE });
        this.socket.send(messageDto);
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }
}

export default SendMessage;