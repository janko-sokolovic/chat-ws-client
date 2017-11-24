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
        const userItems = this.state.users.map((user,id) =>
            <MenuItem key={id} leftIcon={<CheckCircle color={"#2BB673"} />}> {user}</MenuItem>
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