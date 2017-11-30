export function userJoined(users) {
    return {
        type: 'USER_JOINED',
        users: users
    }
}

export function userJoinedAck(thisUser) {
    return {
        type: 'USER_JOINED_ACK',
        thisUser: thisUser
    }
}

export function userLeft(users) {
    return {
        type: 'USER_LEFT',
        users: users
    }
}

export function messageReceived(message) {
    return {
        type: 'TEXT_MESSAGE',
        message: message
    }
}