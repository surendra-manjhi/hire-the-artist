// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "hire-the-artist.firebaseapp.com",
	projectId: "hire-the-artist",
	storageBucket: "hire-the-artist.appspot.com",
	messagingSenderId: "290372114031",
	appId: "1:290372114031:web:3a7ee1720c09769a225f9a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
