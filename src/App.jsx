import './App.css';
import Main from "./pages/Main";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Page404 from "./pages/404";
import Chats from "./pages/Chats";
import Messages from "./pages/Message";
import Todos from "./pages/Todos";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/chats'} element={<Chats/>}/>
                <Route path={'/messages/:id'} element={<Messages/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Routes>
        </>

    );
}

export default App;
