import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messagesReducer} from "./reducers/messagesReducer/messagesReducer";
import {createLogger} from "redux-logger/src";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import {todosReducer} from "./reducers/todosReducer/todosReducer";

// const logger = store => next => action => {
//     console.log('dispatch', action)
//     console.log('before', store.getState())
//
//     let result = next(action)
//     console.log('after', store.getState())
//
//     return result
// }

const persistConfig = {
    key: 'root',
    storage
}

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    chats: chatReducer,
    messages: messagesReducer,
    todos: todosReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
export const persist = persistStore(store)
