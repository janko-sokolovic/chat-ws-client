import { combineReducers } from "redux";
import UsersReducer from './UsersReducer';
import MessagesReducer from './MessagesReducer';
import ThisUserReducer from './ThisUserReducer';

const rootReducer = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
    thisUser: ThisUserReducer
});

export default rootReducer;