

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBclQdXyMI_LL9bE_RjFASX0s1zM0GAJpo",
  authDomain: "devlinks-65972.firebaseapp.com",
  projectId: "devlinks-65972",
  storageBucket: "devlinks-65972.appspot.com",
  messagingSenderId: "543718811674",
  appId: "1:543718811674:web:3554d5a19504b1b72409a3",
  measurementId: "G-D7Y22FYNQL"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth};