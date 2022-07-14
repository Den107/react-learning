import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "**********************************",
    authDomain: "fire-347f0.firebaseapp.com",
    projectId: "fire-347f0",
    storageBucket: "fire-347f0.appspot.com",
    messagingSenderId: "373193970124",
    appId: "1:373193970124:web:0b4b92ee86055d87194d69"
};

const firebaseDB = firebase.initializeApp(firebaseConfig)
export const db = firebaseDB.database().ref()
export const auth = firebase.auth()