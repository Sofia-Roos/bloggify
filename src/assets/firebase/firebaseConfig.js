import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZf-kbaii63NEeC6ZWgrlBfy6UZqVlX00",
  authDomain: "bloggify-world.firebaseapp.com",
  projectId: "bloggify-world",
  storageBucket: "bloggify-world.appspot.com",
  messagingSenderId: "662704570717",
  appId: "1:662704570717:web:b46fc589ed6e261700e8b4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
