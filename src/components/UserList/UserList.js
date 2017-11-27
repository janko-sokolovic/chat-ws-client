import React, {
    Component
} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CheckCircle from 'material-ui-icons/CheckCircle'

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    render() {
        const userItems = this.props.users.map((user) =>
            <MenuItem key={user.id} leftIcon={<CheckCircle color={"#2BB673"} />}> {user.name} </MenuItem>
        );
        return (<div style={{textAlign:'left'}}>
            <Drawer width={200} docked={true}>
                <AppBar title="Users" showMenuIconButton={false} />
                {userItems}
            </Drawer>
        </div>
        );
    }
}

export default UserList;