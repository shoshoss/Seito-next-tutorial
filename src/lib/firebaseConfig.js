// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
