  import firebase from "firebase";
  import 'firebase/database';

    const firebaseConfig = {
    apiKey: "AIzaSyCu_x-sQBogofSwkCyVjSaCJfC5-7um9WI",
    authDomain: "twitter-clone-11e54.firebaseapp.com",
    projectId: "twitter-clone-11e54",
    storageBucket: "twitter-clone-11e54.appspot.com",
    messagingSenderId: "750005137541",
    appId: "1:750005137541:web:f5a40baf70ff81b9e939ec",
    measurementId: "G-EJDCK2SK0L"
};
    // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.analytics();

  const db = firebase.firestore();

  export default db;
