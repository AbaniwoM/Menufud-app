import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQjHOfsqTAc0oV2Gat4RZQkrgWHPEFvFI",
  authDomain: "menufudapp.firebaseapp.com",
  databaseURL: "https://menufudapp-default-rtdb.firebaseio.com",
  projectId: "menufudapp",
  storageBucket: "menufudapp.appspot.com",
  messagingSenderId: "999443638451",
  appId: "1:999443638451:web:22dafed33c433aa30ee8c6",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
