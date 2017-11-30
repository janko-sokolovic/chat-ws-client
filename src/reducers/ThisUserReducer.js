
export default function (state = null, action) {
    switch (action.type) {
        case 'USER_JOINED_ACK':
            return action.thisUser;
        default:
    }

    return state;
}