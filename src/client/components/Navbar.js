import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard";
import { auth } from "../../firebase/config";

export default function NavBar({headerTitle}) {

    //hanldes clicking on dots event
    const handleDots = (e) => {
        alert('You clicked on Dots');
    }

    const navigate = useNavigate();

    //handles dashboard link
    const handleDashboard = (e) => {
         navigate('/');
    }

    //handles adding patient link
    const handleAddPatient = () => {
        navigate('/form1')
    }

    //handles logging out functionality
    const handleLogout = () => {
        auth.signOut().then(() => {
            console.log('User signed out');
            navigate('/signin'); //redirect to sign-in page
        }).catch((error) => {
            console.error('Error signing out: ', error);
        });
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo">CipherMD</div>
                <div className="nav-links">
                    <a className="nav-link" onClick={handleAddPatient}>Add Patient</a>
                    <a className="nav-link" onClick={handleDashboard}>Dashboard</a>
                    <a className="nav-link" onClick={handleLogout}>Logout</a>
                </div>
            </nav>

            <div className="form-header">
                <h1 className="section-title">{headerTitle}</h1>
            </div>
        </>
    )
}