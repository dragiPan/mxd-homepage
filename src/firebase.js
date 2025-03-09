import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBV1XuoNeBpRlM5yo5MLWrymkWNRc8v0KE",
  authDomain: "mxd-homepage.firebaseapp.com",
  projectId: "mxd-homepage",
  storageBucket: "mxd-homepage.firebasestorage.app",
  messagingSenderId: "613010133696",
  appId: "1:613010133696:web:f5c273c9f43c5209675325",
  measurementId: "G-0D4NHFR5D8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };