import {ADD_MESSAGE, DELETE_MESSAGE, GET_MESSAGES} from "../../actionTypes";

const initialState = {
    messages: [
        {
            id: 1,
            title: 'lorem',
            chatId: 1
        },
        {
            id: 2,
            title: 'lorem',
            chatId: 2
        },
        {
            id: 3,
            title: 'lorem',
            chatId: 1
        },
        {
            id: 4,
            title: 'lorem',
            chatId: 2
        },
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: state.messages
            }

        default:
            return state
    }
}