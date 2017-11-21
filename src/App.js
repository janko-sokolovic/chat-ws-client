import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserList from './components/UserList/UserList';
import Chat from './components/Chat/Chat';

class App extends Component {
  users;
  constructor() {
    super();
    this.users = [{
      name: "Janko"
    }, {
      name: "Marko"
    }]
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <UserList users={this.users} />

          <Chat />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
