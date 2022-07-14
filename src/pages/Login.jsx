import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate} from "../redux/reducers/userReducer/userReducer";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) return
        dispatch(loginInitiate(email, password))
    }
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;