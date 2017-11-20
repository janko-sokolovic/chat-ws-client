import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList/UserList';
import Chat from './components/Chat/Chat';

class App extends Component {
  users;
  constructor() {
    super();
    this.users = [{
      name: "Janko"
    },{
      name: "Marko"
    }]
  }

  render() {
    return (
      <div className="App">

        <UserList users={this.users} />

        <Chat />

      </div>
    );
  }
}

export default App;
