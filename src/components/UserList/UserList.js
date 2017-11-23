import React, {
    Component
} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CheckCircle from 'material-ui-icons/CheckCircle'

import './UserList.css';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    render() {
        const userItems = this.state.users.map((user) =>
            <MenuItem key={user.name} leftIcon={<CheckCircle color={"#2BB673"} />}> {user.name}</MenuItem>
        );

        return (<div className="UserList">
            <Drawer width={200} docked={true}>
                <AppBar title="Users" showMenuIconButton={false} />
                {userItems}
            </Drawer>
        </div>
        );
    }
}

export default UserList;