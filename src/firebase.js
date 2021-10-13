import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPFQyskVhkuhO1p0CgwGgaXfN7WrSk9hU",
  authDomain: "clone-7257a.firebaseapp.com",
  projectId: "clone-7257a",
  storageBucket: "clone-7257a.appspot.com",
  messagingSenderId: "655593307283",
  appId: "1:655593307283:web:4752842d81a9b06032e166",
  measurementId: "G-C7VY863GX5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
