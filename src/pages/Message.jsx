import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMessagesSelector} from "../redux/reducers/messagesReducer/messagesSelector";
import {useParams} from "react-router-dom";
import {ADD_MESSAGE, DELETE_MESSAGE} from "../redux/actionTypes";

const Messages = () => {
    const {id}=useParams()
    const [title, setTitle] = useState('')
    const chatMessages = useSelector(getMessagesSelector)
    const dispatch = useDispatch()

    const messages=chatMessages.filter(message=>{
        if(!id) return null

        return message.chatId === +id
    })

    const deleteMessage=(id)=>{
        dispatch({
            type:DELETE_MESSAGE,
            payload: id
        })
    }

    const addMessage = ()=>{
        const obj = {
            id: Math.random(),
            title,
            chatId: +id
        }

        dispatch({
            type: ADD_MESSAGE,
            payload: obj
        })
    }

    return (
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={addMessage}>Add</button>
            {messages.map(message=>(
                <div key={message.id}>
                    <p >{message.title}</p>
                    <button onClick={()=>deleteMessage(message.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Messages;