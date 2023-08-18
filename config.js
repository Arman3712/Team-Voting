import firebase from 'firebase';

//SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD-QCx3Ycsd9fpGAHt-PBUkikITbjXH-Bg",
    authDomain: "e-library-8cf3a.firebaseapp.com",
    projectId: "e-library-8cf3a",
    storageBucket: "e-library-8cf3a.appspot.com",
    messagingSenderId: "872028053399",
    appId: "1:872028053399:web:2154fc22f37994beea2ed2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();