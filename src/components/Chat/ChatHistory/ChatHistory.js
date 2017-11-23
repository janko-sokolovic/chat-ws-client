import React, { Component } from 'react';


class ChatHistory extends Component {
    render() {
        const style = {
            backgroundColor: '#eaeaea',
            padding: 10,
            height:'420px'
        };
        return (
            <div style={style}>
                Chat history here
            </div>
        );
    }
}

export default ChatHistory;