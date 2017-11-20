import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './components/UserList/UserList';

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

      </div>
    );
  }
}

export default App;
