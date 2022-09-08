// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBC_T7TOmn919DQpLJhj5FVfveSwLRc2ok",
  authDomain: "appchat-e8bbc.firebaseapp.com",
  projectId: "appchat-e8bbc",
  storageBucket: "appchat-e8bbc.appspot.com",
  messagingSenderId: "805363932463",
  appId: "1:805363932463:web:39971b996c877032f4d5da",
  measurementId: "G-0HS8V043WJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const storage = getStorage(app);
auth.languageCode = "it";

export { auth, analytics, provider,storage };

