# CipherMD - Encrypted Patient Data Management

CipherMD is a secure web application designed to manage patient data efficiently. It ensures that sensitive patient information is protected through encryption and offers a user-friendly interface for healthcare professionals.

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
