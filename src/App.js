import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserList from './components/UserList/UserList';
import Chat from './components/Chat/Chat';
import Singleton from './socket';
import MessageType from './components/Chat/SendMessage/MessageType';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      messages: []
    }

    this.socket = Singleton.getInstance();

    this.socket.onmessage = (response) => {
      let message = JSON.parse(response.data);
      switch (message.type) {
        case MessageType.TEXT_MESSAGE:
          let messages = this.state.messages;
          messages.push(JSON.parse(response.data));
          this.setState({ messages: messages, users: this.state.users });
          break;
        case MessageType.USER_JOINED:
          let users = this.state.users;
          users.push(message.user);
          this.setState({ messages: this.state.messages, users: users });
          break;
        default:
      }
    }

    this.socket.onopen = (evt) => {
      let messageDto = JSON.stringify({ user: 'Janko', text: '', type: MessageType.USER_JOINED });
      this.socket.send(messageDto);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <UserList users={this.state.users} />
          <Chat messages={this.state.messages} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
