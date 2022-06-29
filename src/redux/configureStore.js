import {combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";


const rootReducer=combineReducers({
    chats: chatReducer,
    messages: messagesReducer
})




export const store = createStore(rootReducer)

