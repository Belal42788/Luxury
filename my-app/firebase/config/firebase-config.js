import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCDQIa8F4YG_CbPnvjFww-IgY-EtZJjROE",
    authDomain: "twsela-71a88.firebaseapp.com",
    projectId: "twsela-71a88",
    storageBucket: "twsela-71a88.appspot.com",
    messagingSenderId: "1084505782046",
    appId: "1:1084505782046:web:d41387c47d488afad5fb0f",
    databaseURL: "https://twsela-71a88-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
export default auth;
export  {database};
