import React, { Component } from 'react';


class ChatMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        }
    }

    render() {
        const style = {
            display: 'block',
            height: '40px'
        };

        const textStyle = {
            float: 'right',
            backgroundColor: '#fff',
            padding: '6px 10px',
            borderRadius: '15px'
        }

        const message = this.state.message;
        return (
            <div style={style}>
                <span style={textStyle}>{message.data}</span>
            </div>
        );
    }
}

export default ChatMessage;