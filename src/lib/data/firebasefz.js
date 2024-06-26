
import { initializeApp, getApps, getApp } from "firebase/app";
import { collection, onSnapshot,  getFirestore, QuerySnapshot} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBKa_mDHXwdVqkq-6fl3uxi1lwRNxJozHM",
    authDomain: "tareas-438ae.firebaseapp.com",
    projectId: "tareas-438ae",
    storageBucket: "tareas-438ae.appspot.com",
    messagingSenderId: "162986822310",
    appId: "1:162986822310:web:cc9338e53818f37d134267"
  };
  

  const fireApp = initializeApp(firebaseConfig)
  export const auth = getAuth(fireApp)
  export const db = getFirestore(fireApp)