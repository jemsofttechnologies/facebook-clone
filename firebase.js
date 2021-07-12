import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCt3ns_78637f99eOEXSGtOZBt6Ry1hYQM",
	authDomain: "facebook-clone-21744.firebaseapp.com",
	projectId: "facebook-clone-21744",
	storageBucket: "facebook-clone-21744.appspot.com",
	messagingSenderId: "251494061712",
	appId: "1:251494061712:web:6aa561c19849009d23ea15",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
