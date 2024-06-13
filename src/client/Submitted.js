import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Submitted() {

    return (
        <div className="container">
            <NavBar/>
            <div className="submitted-container">
                <h1>Form Submitted!</h1>
            </div>

        </div>
    )
}