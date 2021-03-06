import * as Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


// console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

// Initialize Firebase
// Se valida si ya esta inicializada
const firebase = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(firebaseConfig);

const firestore = Firebase.firestore();
const auth = Firebase.auth();
const google = new Firebase.auth.GoogleAuthProvider();
const facebook = new Firebase.auth.FacebookAuthProvider();

module.exports = {
  firebase,
  firestore,
  auth,
  google,
  facebook,
};