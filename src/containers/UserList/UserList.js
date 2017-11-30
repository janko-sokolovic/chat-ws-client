import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CheckCircle from 'material-ui-icons/CheckCircle';
import { connect } from 'react-redux';

class UserList extends Component {

    render() {
        if (!this.props.users || this.props.users.length < 1) {
            return '';
        }

        return (<div style={{ textAlign: 'left' }}>
            <Drawer width={200} docked={true}>
                <AppBar title="Users" showMenuIconButton={false} />
                {this.renderUserList()}
            </Drawer>
        </div>
        );
    }

    renderUserList() {
        return this.props.users.map(user =>
            <MenuItem key={user.id} leftIcon={<CheckCircle color={"#2BB673"} />}> {user.name} </MenuItem>
        );
    }
}

// Whatever is returned is going to show up as props inside UserList
function mapStateToProps(state) {
    return {
        users: state.users
    }
}
// // Anything returned will show up as props in UserList (i.e. method userJoined)
// function mapDispatchToProps(dispatch) {
//     // Whenever userJoined is called, pass result to all reducers
//     return bindActionCreators({ userJoined: userJoined }, dispatch);
// }

// Promote component to container
export default connect(mapStateToProps)(UserList);