import {useDispatch} from "react-redux";
import {logoutInitiate} from "../redux/reducers/userReducer/userReducer";

const Home = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutInitiate())
    }

    return (
        <>
            <h1>Home page</h1>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default Home