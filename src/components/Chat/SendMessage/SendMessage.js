import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './SendMessage.css';

class SendMessage extends Component {

    render() {
        return (
            <div>
                <input />
                <RaisedButton> Send </RaisedButton>
            </div>
        );
    }
}

export default SendMessage;