import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA2zFoXpAJR9jyEwQeJH7-Xo_rO-Cnog3E",
  authDomain: "ceilingfan-e8c42.firebaseapp.com",
  projectId: "ceilingfan-e8c42",
  storageBucket: "ceilingfan-e8c42.firebasestorage.app",
  messagingSenderId: "273059507495",
  appId: "1:273059507495:web:a0d8f8eb9e979694f64d02",
  measurementId: "G-3YDVY0H48M"

}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
