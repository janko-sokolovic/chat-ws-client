
export default function (state = [], action) {

    console.log("red ovdeee", action);
    switch (action.type) {
        case 'TEXT_MESSAGE':
        console.log("red: " , action);
        return [...state, action.message];
    }

    return state;
}