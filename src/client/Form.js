import { useState } from "react";
import CryptoJS from "crypto-js";
import NavBar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import BackBtn from "./components/BackBtn";
import { addPatientData } from "../firebase/config"; //importing the firebase function

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

    const [errors, setErrors] = useState();
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
        setPatientData({
            ...patientData, 
            [name]: value
        });
    }

    //handling submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        //Perform encryption or other actions here
        const encryptedData = encryptData(patientData);

        console.log('Patient info to encrypt: ', patientData); 
        console.log('Encrypted Patient Info: ', encryptedData); 

        localStorage.setItem('patientData', JSON.stringify(patientData));
        localStorage.setItem('encryptedData', encryptedData); 
        
        navigate('/Submission');
    }

    return (
        <div className="container">
            <NavBar headerTitle={'1. Patient Information'} />

            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">* First Name:</h2>
                    <input required className="input-field" name="firstName" value={patientData.firstName} onChange={handleChange}/>
                </div>
                <div className="input-element">
                    <h2 className="input-title">* Last Name:</h2>
                    <input required className="input-field" name="lastName" value={patientData.lastName} onChange={handleChange}/>
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">* Health Card #:</h2>
                    <input required className="input-field" name="healthCard" value={patientData.healthCard} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">* Date of Birth:</h2>
                    <div className="dob-input">
                        <input required className="dob-month" placeholder="MM" name="dobMonth" value={patientData.dobMonth} onChange={handleChange} />
                        <input required className="dob-day" placeholder="DD" name="dobDay" value={patientData.dobDay} onChange={handleChange} />
                        <input required className="dob-year" placeholder="YYYY" name="dobYear" value={patientData.dobYear} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">Email Address:</h2>
                    <input required className="input-field" name="emailAddress" value={patientData.emailAddress} onChange={handleChange} />
                </div>
                <div className="input-element">
                    <h2 className="input-title">* Phone #:</h2>
                    <input required className="input-field" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange} />
                </div>
            </div>
            <div className="form-row">
                <div className="input-element">
                    <h2 className="input-title">* Full Street Address:</h2>
                    <input required className="input-field" name="homeAddress" placeholder="Street Name, City, Province, Postal Code" value={patientData.homeAddress} onChange={handleChange} />
                </div>
            </div>

            <div className="submit-container">
                <BackBtn />
                <button className="submit-btn" onClick={handleSubmit}>Next</button>
            </div>

        </div>
    ); 
};