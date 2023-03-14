import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCXDCxEdRaSml3CkDcYm4-ugqGHLvvRRws",
  authDomain: "music-b2037.firebaseapp.com",
  projectId: "music-b2037",
  storageBucket: "music-b2037.appspot.com",
  appId: "1:466183977927:web:47d824bea411c0809eb7e2"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`)
});

const userCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  userCollection,
  songsCollection,
  commentsCollection,
  storage
}