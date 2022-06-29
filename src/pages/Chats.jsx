import React from 'react';
import {useSelector} from "react-redux";
import {getChatsSelector} from "../redux/reducers/chatReducer/chatSelector";
import {Link} from "react-router-dom";

const Chats = () => {
    const chats = useSelector(getChatsSelector)
    return (
        <div>
            {chats.map(chat=>(
                <Link key={chat.id} to={`/messages/${chat.id}`}>
                    {chat.name}
                </Link>
            ))}
        </div>
    );
};

export default Chats;