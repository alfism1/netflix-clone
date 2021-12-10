import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import "firebase/compat/auth";
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyC6mnar-PTUE4Vgg4ihfWC6XtfXyW8GYmw",
  authDomain: "netflix-clone-55021.firebaseapp.com",
  projectId: "netflix-clone-55021",
  storageBucket: "netflix-clone-55021.appspot.com",
  messagingSenderId: "31377179779",
  appId: "1:31377179779:web:91b1236108f771230087b6",
  measurementId: "G-LXMKYJLZ26",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(firebase);

// // Initialize firestore and seed data data the firestore
const db = getFirestore();
// seedDatabase(db);

export { firebase, db };


// // Create new user
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();
// createUserWithEmailAndPassword(
//   auth,
//   "alfialfarisi@gmail.com",
//   "alfialfarisi@gmail.com"
// )
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   });
