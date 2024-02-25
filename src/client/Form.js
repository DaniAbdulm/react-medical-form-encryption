import { useState } from "react";
import CryptoJS from "crypto-js";

export default function Form() {
    //initialize state object for form values
    const [patientData, setPatientData] = useState({
        firstName: '', 
        lastName: '', 
        healthCard: '', 
        dobMonth: '', 
        dobDay: '', 
        dobYear: '', 
        emailAddress: '', 
        phoneNumber: '', 
        homeAddress: ''
    }); 

    //secret key for encryption - must find a way to store this more secureley
    const secretKey = 'secret-key'; 

    const encryptData = (data) => {
        const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
        return ciphertext;
    }

    //Handle change in input fields
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setPatientData({
            ...patientData, 
            [name]: value
        });
    }

    //handling submission
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //Perform encryption or other actions here
        const encryptedData = encryptData(patientData);
        console.log('Form Data to encrypt: ', patientData); 
        console.log('Encrypted Patient Data: ', encryptedData);
        //encryption happens here and other stuff
    }

    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">CipherMD</div>
                <div className="nav-dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </div>
            </nav>

            <div className="form-header">
                <h1 className="section-title">1. Patient Information</h1>
            </div>

            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">First Name:</h2>
                    <input className="input-field" name="firstName" value={patientData.firstName} onChange={handleChange}/>
                </div>
                <div className="input-element">
                    <h2 className="input-title">Last Name:</h2>
                    <input className="input-field" name="lastName" value={patientData.lastName} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Health Card #:</h2>
                    <input className="input-field" name="healthCard" value={patientData.healthCard} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">Date of Birth:</h2>
                    <div className="dob-input">
                        <input className="dob-month" placeholder="MM" name="dobMonth" value={patientData.dobMonth} onChange={handleChange} />
                        <input className="dob-day" placeholder="DD" name="dobDay" value={patientData.dobDay} onChange={handleChange} />
                        <input className="dob-year" placeholder="YYYY" name="dobYear" value={patientData.dobYear} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Email Address:</h2>
                    <input className="input-field" name="emailAddress" value={patientData.emailAddress} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">Phone #:</h2>
                    <input className="input-field" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange} />
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Home Address:</h2>
                    <input className="input-field" name="homeAddress" value={patientData.homeAddress} onChange={handleChange} />
                </div>
            </div>

            <div className="submit-container">
                <button className="submit-btn" onClick={handleSubmit}>Next</button>
            </div>

        </div>
    ); 
};