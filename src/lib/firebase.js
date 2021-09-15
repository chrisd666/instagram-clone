import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import seedDatabase from "../seed";

const config = {
  apiKey: "AIzaSyDuMnDduNDkDv4MKmQvXFUBAzcd2obCQh0",
  authDomain: "instagram-clone-696e9.firebaseapp.com",
  projectId: "instagram-clone-696e9",
  storageBucket: "instagram-clone-696e9.appspot.com",
  messagingSenderId: "757158137264",
  appId: "1:757158137264:web:d0e515b321ffcbe3655a75",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
