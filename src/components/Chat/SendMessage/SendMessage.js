import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SendMessage extends Component {

    render() {
        const styles = {
            position: 'absolute',
            bottom: 0,
            width:'100%'
        };
        const fieldStyles= {
            width:'70%'
        };
        const btnStyles = {
            marginLeft:10
        };
        return (
            <div style={styles}>
                <TextField
                    hintText="Write message here.."
                    fullWidth={true}
                    style={fieldStyles}
                />
                <RaisedButton style={btnStyles}> Send </RaisedButton>
            </div>
        );
    }
}

export default SendMessage;