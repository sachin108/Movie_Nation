import firebase from "firebase/compat";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0NTtwWlvKsmNvkes8fa85Q68DkNc2GoE",
  authDomain: "movienation-e819c.firebaseapp.com",
  projectId: "movienation-e819c",
  storageBucket: "movienation-e819c.appspot.com",
  messagingSenderId: "885024252312",
  appId: "1:885024252312:web:9f4a1232c42b2a5471cbed",
  measurementId: "G-CC4J7E8HY5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};
export default db;