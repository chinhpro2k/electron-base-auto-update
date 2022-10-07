import Home from "../Home";
import {Route, Routes} from "react-router-dom";

const Redirect = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
    )
}

export default Redirect;