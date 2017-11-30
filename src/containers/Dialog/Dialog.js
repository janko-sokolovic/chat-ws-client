import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import CheckCircle from 'material-ui-icons/CheckCircle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dialog extends Component {

    render() {
        return (

        );
    }

    
}
function mapStateToProps(state) {
    return {
        thisUser: state.thisUser
    }
}

export default connect(mapStateToProps)(UserList);