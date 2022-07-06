import {GET_CHATS} from "../../actionTypes";

const initialState = {
    chats: [
        {
            id: 1,
            name: 'Denis'
        },
        {
            id: 2,
            name: 'Andrey'
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS:
            return {
                ...state,
                chats: state.chats
            }

        default:
            return state
    }
}