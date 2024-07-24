# CipherMD - Encrypted Patient Data Management

CipherMD is a secure web application built with React and Firebase, designed to manage patient data efficiently and securely. The app ensures that sensitive patient information is encrypted both at rest and in transit, providing a comprehensive and user-friendly dashboard for healthcare professionals. Key features include user authentication, data encryption, CRUD operations, and a searchable patient list.


## Table of Contents
- Features
- Technologies Used
- Installation
- Usage
- Screenshots
- Contributing
- License

## Features
- **User Authentication:** Secure login system using Firebase Authentication to ensure only authorized personnel can access patient data.
- **Data Encryption:** Patient data is encrypted using CryptoJS before being stored in Firebase, ensuring sensitive information is protected.
- **CRUD Operations:** Full create, read, update, and delete functionality for managing patient records.
- **Dashboard:** A user-friendly dashboard that displays patient information in a tabular format, with options to edit, delete, and sort records.
- **Responsive Design:** The application is fully responsive, providing a seamless experience across devices.

## Technologies Used
- **Frontend**
  - React
  - React Router
  - CSS Modules

- **Backend**
  - Firebase Firestore
  - Firebase Authentication

- **Encryption**
  - CryptoJS

## Installation
1. **Clone the repository:**
```
https://github.com/DaniAbdulm/react-medical-form-encryption.git
cd CipherMD
```

2. **Install Dependencies:**
```
npm install
```

3. **Create a Firebase project and set up Firestore and Authentication.**

4. **Add your Firebase configuration to a '.env' file:**
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. **Stat the development server:**
```
npm start
```

## Usage
1. **Sign In:**
    - Only authorized users can log in to access the app.

2. **Add Patient:**
    - Fill in the patient information and submit to add new patient.
      
    ![image](https://github.com/user-attachments/assets/b47a59d3-bc4e-4555-8dfb-d7fee1aa5394)
   ![image](https://github.com/user-attachments/assets/876d38df-a9eb-4014-8207-0c1fdf0a37be)
   ![image](https://github.com/user-attachments/assets/655f7a93-4993-4c65-acb8-b42161c9e79e)



4. **Dashboard:**
   - View all submitted patients, search, sort, and select records for editing or deletion.

  ![image](https://github.com/user-attachments/assets/7a197029-f381-4d02-983c-6196748c8dbd)

5. **Edit Patient:**
   - Select a patient record using the checkboxes and click the "Edit" button to update patient details.

6. ** Delete Patient:**
   - Select one or more patient records using the checkboxes and click the "Delete" button to remove records.





















