import { useState } from "react";
import CryptoJS from "crypto-js";
import NavBar from "./components/Navbar";

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
            <NavBar headerTitle={'1. Patient Information'} />

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