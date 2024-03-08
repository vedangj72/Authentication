import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


// const firebaseConfig = {
//     apiKey: "AIzaSyB86c4kshJCkdoExXls6qGY-HqhaTdSnto",
//     authDomain: "easyhired-35b63.firebaseapp.com",
//     projectId: "easyhired-35b63",
//     storageBucket: "easyhired-35b63.appspot.com",
//     messagingSenderId: "664842632078",
//     appId: "1:664842632078:web:2a033f70112d3acae902df",
//     measurementId: "G-FKPYLC5D8S"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDYcCa9CpssThFRcaNtm41Aqgq3uc5bAz8",
  authDomain: "survey-63546.firebaseapp.com",
  projectId: "survey-63546",
  storageBucket: "survey-63546.appspot.com",
  messagingSenderId: "381722176621",
  appId: "1:381722176621:web:eec311bf9627bb17fd2364",
  measurementId: "G-DPKDT6R5MJ"
};

  //init firebase
  const app = initializeApp(firebaseConfig);

  //init services
  const auth = getAuth();
  const projectFirestore= getFirestore(app)

  export {auth,projectFirestore}