import { useNavigate } from "react-router-dom";

export default function BackBtn() {
    let navigate = useNavigate(); 

    return (
        <div className="back-btn-container">
            <button className="back-btn" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    )
}