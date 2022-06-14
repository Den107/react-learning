import {useEffect, useState} from "react";
import './App.css';


function App() {
    const [messageList, setMessageList] = useState([])
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')

    useEffect(()=>{
        setTimeout(robotAnswer, 1500)
    }, [messageList])

    const onInputTextChange = (e) => {
        setText(e.target.value)
    }

    const onInputAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const getId = (arr) => {
        return arr.length ? arr[arr.length - 1].id + 1 : 0
    }

    const onFormSubmit = e => {
        e.preventDefault()
        setMessageList(prevState =>
            [...prevState, {
                id: getId(prevState),
                text,
                author
            }]
        )
        setText('')
        setAuthor('')
    }

    function robotAnswer() {
        const lastAuthor = messageList[messageList.length -1]
        if(lastAuthor && lastAuthor.author){
            setMessageList(prevState => [
                ...prevState,
                {
                    id: getId(prevState),
                    text: `Robot says: author ${lastAuthor.author} send message`
                }
            ])
        }
    }

    return (
        <div className="App">
            <ul>
                {messageList.map(item => {
                    return (
                        <li key={item.id}>
                            <p>Text: {item.text}</p>
                            <p>Author: {item.author}</p>
                        </li>
                    )
                })}
            </ul>
            <div>
                <form onSubmit={e => onFormSubmit(e)}>
                    <input
                        value={text}
                        type="text"
                        placeholder={'Text'}
                        required
                        onChange={e => onInputTextChange(e)}></input>
                    <input
                        value={author}
                        type="text"
                        placeholder={'Author'}
                        required
                        onChange={e => onInputAuthorChange(e)}></input>
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    );
}

export default App;
