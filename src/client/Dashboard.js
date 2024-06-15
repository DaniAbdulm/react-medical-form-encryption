import React, { useState, useEffect } from "react"
import NavBar from "./components/Navbar"
import CryptoJS from "crypto-js"
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const secretKey = 'secret-key'; 

const Dashboard = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(); 
            const querySnapshot = await getDocs(collection(db, "patients"));
            const patientList = querySnapshot.docs.map(doc => {
                const encryptedData = doc.data().encryptedData;
                const decryptedData = JSON.parse(CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8));
                return decryptedData;
            }); 
            setPatients(patientList);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <NavBar headerTitle={'Dashboard'} />
            <div className="header-container">
                <input className="db-search-bar" placeholder="Search..." />
                <h1 className="header-title">Submitted Patients</h1>
            </div>
            <div className="patient-list">
            {patients.map((patient, index) => (
                    <div key={index} className="patient-card">
                        <h3 className="patient-title">{index + 1} - {patient.firstName} {patient.lastName}</h3>
                        <p className="patient-data"><strong>Health Card #:</strong> {patient.healthCard}</p>
                        <p className="patient-data"><strong>Date of Birth:</strong> {patient.dobMonth}/{patient.dobDay}/{patient.dobYear}</p>
                        <p className="patient-data"><strong>Email Address:</strong> {patient.emailAddress}</p>
                        <p className="patient-data"><strong>Phone Number:</strong> {patient.phoneNumber}</p>
                        <p className="patient-data"><strong>Home Address:</strong> {patient.homeAddress}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard; 