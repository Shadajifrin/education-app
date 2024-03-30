
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBx3YxlMOGR_loxi2XCZmm-Fm2bNRKVkfg",
  authDomain: "addclass-52114.firebaseapp.com",
  projectId: "addclass-52114",
  storageBucket: "addclass-52114.appspot.com",
  messagingSenderId: "412316429551",
  appId: "1:412316429551:web:59a6aafa41fa220565bf1a",
  measurementId: "G-E1RRBR4ZP5"
};


const app = initializeApp(firebaseConfig);
const db = getStorage(app);
const txtdb= getFirestore(app);

export default { db,txtdb};