import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfocnPscgpoutGBvx2my9nBUpnCmU8I2c",
  authDomain: "shopping-app-5cb1c.firebaseapp.com",
  projectId: "shopping-app-5cb1c",
  storageBucket: "shopping-app-5cb1c.appspot.com",
  messagingSenderId: "908504912354",
  appId: "1:908504912354:web:f752ff2032167fe8cfe9bb",
  measurementId: "G-B44J8VVP5M"
};


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);