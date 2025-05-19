import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDNn3rTFpoXqbISO4izQmCpxp9gCmBUVvg",
  authDomain: "loginandregister-454ea.firebaseapp.com",
  projectId: "loginandregister-454ea",
  storageBucket: "loginandregister-454ea.firebasestorage.app",
  messagingSenderId: "625328287177",
  appId: "1:625328287177:web:a4c12766abec0ada310c18",
  measurementId: "G-GR57ZH05R4"
};

const app = initializeApp(firebaseConfig);
const analytics= getAnalytics(app);
export const auth = getAuth(app)