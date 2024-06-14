import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import HomeBtn from "./components/HomeBtn";
import Checkmark from "./components/Checkmark";

export default function Submitted() {

    return (
        <div className="container">
            <NavBar/>
            <div className="submitted-container">
                <h1 className="submitted-title">Form Submitted!</h1>
                <Checkmark />
                <HomeBtn />
            </div>
        </div>
    )
}