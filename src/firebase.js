import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIftOWwPYCRun06iL7GbpK6avmvpBOpS8",
  authDomain: "instagram-clone-83afe.firebaseapp.com",
  projectId: "instagram-clone-83afe",
  storageBucket: "instagram-clone-83afe.appspot.com",
  messagingSenderId: "698156845029",
  appId: "1:698156845029:web:1f1bca7da3833607a2910c",
  measurementId: "G-39ZHY99C10",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
