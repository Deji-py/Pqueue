

import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-jGv-f5ctCVKjoVNbapE05qneYr9nTI8",
    authDomain: "pqueue-89f00.firebaseapp.com",
    projectId: "pqueue-89f00",
    storageBucket: "pqueue-89f00.appspot.com",
    messagingSenderId: "321315536811",
    appId: "1:321315536811:web:443b635729075f54a1dcee",
    measurementId: "G-QGJLC3KSLJ"
  };


  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
 export const db = getFirestore(app)
