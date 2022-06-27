import './App.css';
import Main from "./pages/Main";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Page404 from "./pages/404";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    return (
        // <>
        //     <Nav/>
        //     <Routes>
        //         <Route path={'/'} element={<Home/>}/>
        //         <Route path={'/chats'} element={<Main/>}/>
        //         <Route path={'/profile'} element={<Profile/>}/>
        //         <Route path={'*'} element={<Page404/>}/>
        //     </Routes>
        // </>
        <div>
            {count}
            <button onClick={() => dispatch({type: 'plus'})}>INC</button>
            <button onClick={() => dispatch({type: 'minus'})}>DEC</button>
        </div>
    );
}

export default App;
