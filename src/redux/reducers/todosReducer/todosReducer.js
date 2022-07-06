import {ERROR_TODOS, GET_TODOS, LOADING_TODOS} from "../../actionTypes";

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case LOADING_TODOS:
            return {
                ...state,
                loading: true
            }
        case ERROR_TODOS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const loadTodos = () => {
    return async dispatch => {
        dispatch({type: LOADING_TODOS})
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            dispatch({
                type: GET_TODOS,
                payload: data
            })
        } catch (e) {
            dispatch({
                type: ERROR_TODOS,
                payload: e.toString()
            })
        }
    }
}