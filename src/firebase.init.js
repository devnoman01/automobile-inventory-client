import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyBptTcTm2Er4JEi_FmpFvmn-RQcnl9ZRAA",
  // authDomain: process.env.REACT_APP_authDomain,
  authDomain: "automobile-inventory.firebaseapp.com",
  // projectId: process.env.REACT_APP_projectId,
  projectId: "automobile-inventory",
  // storageBucket: process.env.REACT_APP_storageBucket,
  storageBucket: "automobile-inventory.appspot.com",
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  messagingSenderId: "975331207666",
  // appId: process.env.REACT_APP_appId,
  appId: "1:975331207666:web:14c91e5f0205221c43a36b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
