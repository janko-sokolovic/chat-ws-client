import React, { Component } from 'react';
import './User.css';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        }
    }

    render() {
        return (<div className="User">{this.state.name} </div>)
    }

}

export default User;