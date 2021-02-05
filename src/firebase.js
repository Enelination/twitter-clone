import firebase from "firebase";


  const firebaseConfig = {
    apiKey: "AIzaSyDaWKOZpcDoDlq-uzDM-fc_xm3v4_nbw0Y",
    authDomain: "twitter-clone-bbd61.firebaseapp.com",
    databaseURL: "https://twitter-clone-bbd61.firebaseio.com",
    projectId: "twitter-clone-bbd61",
    storageBucket: "twitter-clone-bbd61.appspot.com",
    messagingSenderId: "155971254317",
    appId: "1:155971254317:web:e9166904029870343560a4"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
