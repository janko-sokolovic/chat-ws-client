import React, { Component } from 'react';


class ChatMessage extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     position: props.float
        // }
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
        return (
            <div style={style}>
                <span style={textStyle}>Hello world</span>
            </div>
        );
    }
}

export default ChatMessage;