import React, {
    Component
} from 'react';
import './UserList.css';
import User from '../User/User';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: props.users
        }
    }

    render() {

        const userItems = this.state.users.map((user) =>
            <User key={user.name.toString()} name={user.name} />
        );

        return (<div className="UserList">
            Online users:
            {userItems}
        </div>
        );
    }
}

export default UserList;