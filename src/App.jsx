import './App.css';
import Main from "./pages/Main";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Page404 from "./pages/404";


function App() {


    return (
        <>
            <Nav/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/chats'} element={<Main/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'*'} element={<Page404/>}/>
            </Routes>
        </>

    );
}

export default App;
