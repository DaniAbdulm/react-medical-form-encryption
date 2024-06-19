import { useNavigate } from "react-router-dom";

export default function HomeBtn() {
    let navigate = useNavigate(); 

    return (
        <div className="home-btn-container">
            <button className="home-btn" onClick={() => navigate('/')}>
                Back to Dashboard
            </button>
        </div>
    )
}