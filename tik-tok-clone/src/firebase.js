import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCspitVzQ81izzZn3zIQ0cZHYb5kteuvBM",
    authDomain: "tik-tok-clone-amannvl.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-amannvl.firebaseio.com",
    projectId: "tik-tok-clone-amannvl",
    storageBucket: "tik-tok-clone-amannvl.appspot.com",
    messagingSenderId: "261348069614",
    appId: "1:261348069614:web:2139c0208bc91c76cd63ff",
    measurementId: "G-5XLYKSHWW7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;