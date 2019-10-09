import firebase, { firestore } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
    const payload = {
        apiKey: process.env.FIREBASE_APIKEY || '',
        authDomain: process.env.FIREBASE_AUTHDOMAIN || '',
        databaseURL: process.env.FIREBASE_DATABASEURL || '',
        projectId: process.env.FIREBASE_PROJECTID || '',
        storageBucket: process.env.FIREBASE_STORAGEBUCKET || '',
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID || '',
        appId: process.env.FIREBASE_APPID || '',
        measurementId: process.env.FIREBASE_MEASUREMENTID || ''
    }
    firebase.initializeApp(payload)
}

export default (context, inject) => {
    inject('firebase', firebase)
    inject('firestore', firestore())
    inject('auth', firebase.auth())
}