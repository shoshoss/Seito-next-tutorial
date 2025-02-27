import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCPXCrmQbJ3chfW7kC7dFeTA5Y9EInz3wA",
	authDomain: "seito-daily-report.firebaseapp.com",
	projectId: "seito-daily-report",
	storageBucket: "seito-daily-report.firebasestorage.app",
	messagingSenderId: "1017723924935",
	appId: "1:1017723924935:web:75ff8733df27da6518e9e2",
	measurementId: "G-ES8RH07KQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
