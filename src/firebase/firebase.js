import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3PurYMvb3bqBVM6SrMivEo-WM5cOvxPk",
  authDomain: "loginexample-ab9b2.firebaseapp.com",
  projectId: "loginexample-ab9b2",
  storageBucket: "loginexample-ab9b2.appspot.com",
  messagingSenderId: "79262660307",
  appId: "1:79262660307:web:63868a254e999887a4c626"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

