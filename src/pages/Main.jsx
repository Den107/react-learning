import {Grid} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

const Main=()=>{
    const [messageList, setMessageList] = useState([])
    const [text, setText] = useState('')
    const [author, setAuthor] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [chats, setChats] = useState([
        {
            name: 'Chat1',
            id: 1
        },
        {
            name: 'Chat2',
            id: 2
        },
        {
            name: 'Chat3',
            id: 3
        },
    ])

    useEffect(() => {
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
        const lastAuthor = messageList[messageList.length - 1]
        if (lastAuthor && lastAuthor.author) {
            setMessageList(prevState => [
                ...prevState,
                {
                    id: getId(prevState),
                    text: `Robot says: author ${lastAuthor.author} send message`
                }
            ])
        }
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return(
        <Box marginTop={'50px'} className="App" sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                                <ListItemText inset primary="Chat1"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                                <ListItemText inset primary="Chat2"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                                <ListItemText inset primary="Chat3"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>


                <Grid xs={8}>
                    <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                        {messageList.map(item => {
                            return (
                                <ListItem key={item.id}>
                                    <ListItemText primary={item.author} secondary={item.text}/>
                                </ListItem>
                            )
                        })}
                    </List>
                    <div>
                        <Box component='form'
                             sx={{
                                 '& > :not(style)': {m: 1, width: '25ch'},
                             }}
                             autoComplete="off"
                             onSubmit={e => onFormSubmit(e)}>
                            <TextField
                                label="Text"
                                variant="outlined"
                                value={text}
                                type="text"
                                required
                                focused
                                onChange={e => onInputTextChange(e)}></TextField>
                            <TextField
                                label="Author"
                                variant="outlined"
                                value={author}
                                type="text"
                                required
                                onChange={e => onInputAuthorChange(e)}></TextField>
                            <Button type="submit" variant="contained">Send</Button>
                        </Box>

                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main