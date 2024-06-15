import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";

export default function NavBar({headerTitle}) {

    //hanldes clicking on dots event
    const handleDots = (e) => {
        alert('You clicked on Dots');
    }

    const navigate = useNavigate();

    //handles dashboard link
    const handleDashboard = (e) => {
         navigate('/Dashboard');
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">CipherMD</div>
                <div className="nav-links">
                    <a className="nav-link" onClick={handleDashboard}>Dashboard</a>
                    <a className="nav-dots" onClick={handleDots}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </a>
                </div>
            </nav>

            <div className="form-header">
                <h1 className="section-title">{headerTitle}</h1>
            </div>
        </>
    )
}