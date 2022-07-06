import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {err, getTodos, load} from "../redux/reducers/todosReducer/todosSelector";
import {loadTodos} from "../redux/reducers/todosReducer/todosReducer";

const Todos = () => {
    const todos = useSelector(getTodos)
    const dispatch = useDispatch()
    const loading = useSelector(load)
    const error = useSelector(err)

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    if (loading) {
        return (
            <div>Идет загрузка...</div>
        )
    }

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default Todos;