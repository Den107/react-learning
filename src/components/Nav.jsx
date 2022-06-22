import {NavLink} from "react-router-dom";
import {Container} from "@mui/material";
import './Nav.css'

const Nav = () => {


    return (
        <Container>
            <NavLink className={({isActive}) => isActive ? 'button-style--active' : 'button-style'} end to={'/'}>Home
                page</NavLink>
            <NavLink className={({isActive}) => isActive ? 'button-style--active' : 'button-style'} end to={'/chats'}>Chats
                page</NavLink>
            <NavLink className={({isActive}) => isActive ? 'button-style--active' : 'button-style'} end
                     to={'/profile'}>Profile</NavLink>
        </Container>
    )
}

export default Nav