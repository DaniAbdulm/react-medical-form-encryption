import NavBar from "./components/Navbar";
import BackBtn from "./components/BackBtn";
import { useEffect, useState } from "react";

const patientFormData = require("./Form"); 
const medicalFormData = require("./Form2"); 

export default function Submission() {
    //from form 1
    const [patientData, setPatientData] = useState(null); 
    const [encryptedData, setEncryptedData] = useState(null); 

    //from form 2
    const [medicalData, setMedicalData] = useState(null);
    const [encryptedMedData, setEncryptedMedData] = useState(null);

    //for patient data 
    useEffect(() => {
        //from Form 1
        const storedPatientData = localStorage.getItem('patientData'); 
        const storedEncryptedPatientData = localStorage.getItem('encryptedData'); 
        
        //from Form 2
        const storedMedData = localStorage.getItem('medicalData'); 
        const storedEncryptedMedData = localStorage.getItem('encryptedMedData'); 

        if (storedPatientData) {
            const parsedPatientData = JSON.parse(storedPatientData); 
            setPatientData(parsedPatientData); 
            console.log('Patient Data:', parsedPatientData);
        }
        
        if (storedEncryptedPatientData) {
            setEncryptedData(storedEncryptedPatientData); 
            console.log('Encrypted Patient Data:', storedEncryptedPatientData); 
        }

        if (storedMedData) {
            const parsedMedData = JSON.parse(storedMedData); 
            setMedicalData(parsedMedData); 
            console.log('Patient Medical Data:', parsedMedData); 
        }

        if (storedEncryptedMedData) {
            setEncryptedMedData(storedEncryptedMedData); 
            console.log('Encrypted Patient Medical Data:', storedEncryptedMedData); 
        }
    }, []); 


    const handleSubmit = (e) => {
        e.preventDefault(); 


    }

    return (
        <div className="container">
            <NavBar headerTitle={'3. Submission Confirmation'} />

            <h2 className="submit-title">Please confirm all data is correct</h2>
            <div className="submit-data-container">
                <p className="submit-data-header">Patient Information</p>
                <div className="submit-column">
                    <div className="output-element">
                        <h2 className="output-title">First Name:</h2>
                        <p className="data-output">{patientData?.firstName}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Last Name:</h2>
                        <p className="data-output">{patientData?.lastName}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Healthcard #:</h2>
                        <p className="data-output">{patientData?.healthCard}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Date of Birth:</h2>
                        <p className="data-output">{patientData?.dobMonth}/{patientData?.dobDay}/{patientData?.dobYear}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Email:</h2>
                        <p className="data-output">{patientData?.emailAddress}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Phone Number:</h2>
                        <p className="data-output">{patientData?.phoneNumber}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Home Address:</h2>
                        <p className="data-output">{patientData?.homeAddress}</p>
                    </div>
                </div>
            </div>

            <div className="submit-data-container">
                <p className="submit-data-header">Medical Data</p>
                <div className="submit-column">
                    <div className="output-element">
                        <h2 className="output-title">Medical History:</h2>
                        <p className="data-output">{medicalData?.medHistory}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Current Medication:</h2>
                        <p className="data-output">{medicalData?.currentMedication}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Allergies:</h2>
                        <p className="data-output">{medicalData?.allergies}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Symptoms:</h2>
                        <p className="data-output">{medicalData?.symptoms}</p>
                    </div>
                    <div className="output-element">
                        <h2 className="output-title">Previous Treatments:</h2>
                        <p className="data-output">{medicalData?.prevTreatments}</p>
                    </div>
                </div>
            </div>

            

            <div className="submit-container">
                <BackBtn />
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}