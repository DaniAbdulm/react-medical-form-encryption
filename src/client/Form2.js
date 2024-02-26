import { useState } from "react";
import CryptoJS from "crypto-js";
import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Form2() {
    //initializing state object for form values 
    const [medicalData, setMedicalData] = useState({
        medHistory: '',
        currentMedication: '', 
        allergies: '', 
        symptoms: '', 
        prevTreatments: '' 
    });

    const navigate = useNavigate(); 

    //secret key for encryption - must find a way to store this more secureley
    const secretKey = 'secret-key'; 

    const encryptData = (data) => {
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
        return ciphertext;
    }

    //Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setMedicalData({
            ...medicalData, 
            [name]: value
        });
    }

    //handling submission
    const handleSubmit = (e) => {
        e.preventDefault(); 

        //Perform encryption or other actions here
        const encryptedData = encryptData(medicalData);

        console.log('Form Data to encrypt: ', medicalData); 
        console.log('Encrypted Patient Data: ', encryptedData);
        
        navigate('/submission');
    }

    return (
        <div className="container">
            <NavBar headerTitle={'2. Medical Data'} />

            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Medical History:</h2>
                    <textarea required className="input-txtarea" name="medHistory" value={medicalData.medHistory} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">Current Medication:</h2>
                    <textarea required className="input-txtarea" name="currentMedication" value={medicalData.currentMedication} onChange={handleChange} />
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Allergies:</h2>
                    <textarea required className="input-txtarea" name="allergies" value={medicalData.allergies} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">Symptoms:</h2>
                    <textarea required className="input-txtarea" name="symptoms" value={medicalData.symptoms} onChange={handleChange} />
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Previous Treatments:</h2>
                    <textarea required className="input-txtarea" name="prevTreatments" value={medicalData.prevTreatments} onChange={handleChange} />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit-btn" onClick={handleSubmit}>Next</button>
            </div>

        </div>
    ); 
}