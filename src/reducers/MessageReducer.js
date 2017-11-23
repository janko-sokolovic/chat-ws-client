import React from 'react'
import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    messages: []
};

export default function messages(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_MESSAGE:
            const message = action.message;
            return {...state,
                messages: [...state.messages, {
                    text: message.text,
                    user: message.userName
                }]
            }
        case actionTypes.SEND_MESSAGE:
            return state;
        default:
            return state;
    }
}