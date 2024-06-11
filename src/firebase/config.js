import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA5C4ts-FPbZO_PgbdyJkVYCasRi-JMwwQ",
    authDomain: "ciphermd.firebaseapp.com",
    projectId: "ciphermd",
    storageBucket: "ciphermd.appspot.com",
    messagingSenderId: "856296183551",
    appId: "1:856296183551:web:9b75e4e2c393725fbc5eca",
    measurementId: "G-LH9N2Q41T0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export const addPatientData = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "patients"), data); 
        console.log("Document written with ID: ", docRef.id); 
    } catch (e) {
        console.error("Error adding document: ", e);
        }
    };