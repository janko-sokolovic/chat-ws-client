import React, {
    Component
} from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CheckCircle from 'material-ui-icons/CheckCircle'

import './UserList.css';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users,
            open: false
        }
    }

    handleToggle = () => { console.log(this.state.open); this.setState({ open: !this.state.open }) };

    render() {
        const userItems = this.state.users.map((user) =>
            <MenuItem key={user.name} leftIcon={<CheckCircle color={"#2BB673"} />}> {user.name}</MenuItem>
        );

        return (<div className="UserList">
            
            <RaisedButton
                label="Show active users"
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