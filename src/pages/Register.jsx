import React, {useState} from 'react';
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Register = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [email, setEmail] = useState('')
    const user = useSelector(userSelector)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPass) return
        dispatch(registerInitiate(email, password, login))
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input value={login} onChange={e => setLogin(e.target.value)} type="text"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <input value={confirmPass} onChange={e => setConfirmPass(e.target.value)} type="password"/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                <button type="submit">Sign</button>
            </form>
        </div>
    );
};

export default Register;