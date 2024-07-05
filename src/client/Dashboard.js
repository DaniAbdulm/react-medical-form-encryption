import React, { useState, useEffect } from "react"
import NavBar from "./components/Navbar"
import CryptoJS from "crypto-js"
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const secretKey = 'secret-key'; 

const Dashboard = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatients, setSelectedPatients] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleCheckboxChange = (index) => {
        setSelectedPatients((prevSelectedPatients) => {
            if (prevSelectedPatients.includes(index)) {
                return prevSelectedPatients.filter((i) => i !== index);
            } else {
                return [...prevSelectedPatients, index];
            }
        });
    };

    const [editingPatient, setEditingPatient] = useState(null);

    const handleEditButtonClick = () => {
        if (selectedPatients.length === 1) {
            const pathToEdit = patients.find(patient => patient.i === selectedPatients[0]);
            console.log('Editing patient:', pathToEdit);
        } else {
            alert("Please select exactly one patient to edit.");
        }
    };

    const filteredPatients = patients.filter(patient => {
        return (
            patient.firstName.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
            patient.lastName.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
            patient.emailAddress.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
            patient.phoneNumber.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
            patient.healthCard.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
        ); 
    });
 

    return (
        <div className="container">
            <NavBar headerTitle={'Dashboard'} />
            <div className="header-container">
                <h1 className="header-title">Patients</h1>
                <input className="db-search-bar" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="patient-table-buttons">
                <button className="pt-edit-btn" onClick={handleEditButtonClick}>Edit</button>
                <button className="pt-delete-btn">Delete</button>
                <button className="pt-sort-btn">Sort</button>
            </div>
            <div className="patient-table-container">
                <table className="patient-table">
                    <thead>
                        <tr>
                            <th>Select</th>
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
                        {filteredPatients.map((patient, index) => (
                            <tr key={index}>
                                <td>
                                    <input 
                                        type="checkbox"
                                        checked={selectedPatients.includes(index)}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                </td>
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