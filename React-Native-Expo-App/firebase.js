// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDPWALps46VEEl7aLET6ADvkVFPbKj-wI8",
    authDomain: "fir-auth-tutorial-3d12e.firebaseapp.com",
    projectId: "fir-auth-tutorial-3d12e",
    storageBucket: "fir-auth-tutorial-3d12e.appspot.com",
    messagingSenderId: "250277186197",
    appId: "1:250277186197:web:6db537a0b6e053a645e99c",
    measurementId: "G-XWFZQ1R49H"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
