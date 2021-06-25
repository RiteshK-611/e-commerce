import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCJ_312PuXgfFl7CSCKMAlsdwunWsfX_f0",
  authDomain: "e-commerce-site-89d25.firebaseapp.com",
  projectId: "e-commerce-site-89d25",
  storageBucket: "e-commerce-site-89d25.appspot.com",
  messagingSenderId: "1062898183621",
  appId: "1:1062898183621:web:f33ffd5040481596d8afac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }