import * as actionTypes from './ActionTypes';

export function sendMessage(message) {
    return {
        type: actionTypes.SEND_MESSAGE,
        message
    }
}

export function receiveMessage(message) {
    return {
        type: actionTypes.RECEIVE_MESSAGE,
        message
    }
}
