// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPA5KGw04xPY086TwRZQmBj3m0Vugn1OY",
  authDomain: "chef-recipe-hunting-assignment.firebaseapp.com",
  projectId: "chef-recipe-hunting-assignment",
  storageBucket: "chef-recipe-hunting-assignment.appspot.com",
  messagingSenderId: "659817471177",
  appId: "1:659817471177:web:4dadd75db27f42962c0118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;