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
                <h1 className="header-title">Submitted Patients</h1>
                <input className="db-search-bar" placeholder="Search..." />
            </div>
            <div className="patient-table-container">
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Health Card #</th>
                            <th>Date of Birth</th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Home Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.healthCard}</td>
                                <td>{patient.dobMonth}/{patient.dobDay}/{patient.dobYear}</td>
                                <td>{patient.emailAddress}</td>
                                <td>{patient.phoneNumber}</td>
                                <td>{patient.homeAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard; 