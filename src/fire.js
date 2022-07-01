import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbjmOcVkyKJOZpLua8tvhsTqyfaJ4BEZo",
  authDomain: "apple-hackaton.firebaseapp.com",
  projectId: "apple-hackaton",
  storageBucket: "apple-hackaton.appspot.com",
  messagingSenderId: "122097519104",
  appId: "1:122097519104:web:8bb6e34b13b8ff1c0d26e5",
};

export default fire.initializeApp(firebaseConfig);
