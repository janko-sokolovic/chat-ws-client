import React, {
    Component
} from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

import check from './check.png';


import './UserList.css';
import User from '../User/User';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users,
            open: false
        }
    }

    handleToggle = () => { console.log(this.state.open); this.setState({ open: !this.state.open })};

    render() {
        const userItems = this.state.users.map((user) =>
            <MenuItem> {user.name}</MenuItem>
        );

        return (<div className="UserList">
        <img src={check}/>
            <RaisedButton
                label="Toggle Drawer"
                onClick={this.handleToggle}
            />
            <Drawer width={200} open={this.state.open}>
                <AppBar title="Users" showMenuIconButton={false} />
                {userItems}
            </Drawer>
        </div>
        );
    }
}

export default UserList;