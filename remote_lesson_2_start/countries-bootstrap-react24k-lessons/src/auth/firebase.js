// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "countries-react24k-399d0.firebaseapp.com",
  projectId: "countries-react24k-399d0",
  storageBucket: "countries-react24k-399d0.appspot.com",
  messagingSenderId: "304173872421",
  appId: "1:304173872421:web:42931c45da1702049856cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const LoginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
const logout = () => {
  signOut(auth);
};

const addFavoriteToFirebase = async (uid, name) => {
  try {
    await addDoc(collection(db, `users/${uid}/favourites`), { name });
    console.log("favorite added to Firebase");
  } catch (error) {
    console.log("error removing favorite from firebase", error);
  }
};

const removeFavoriteFromFirebase = async (uid, name) => {
  try {
    if (!name) {
      console.error("Error removing from firebase: Name parameter undefined ");
      return;
    }
    const q = query(
      collection(db, `users/${uid}/favourites`),
      where("name", "==", name)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    console.log("removed favorite from firebase");
  } catch (error) {
    console.log("error removing favorite from firebase", error);
  }
};

const clearFavouritesFromFirebase = async (uid) => {
  try {
    const q = query(collection(db, `users/${uid}/favourites`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
      console.log("Favourites cleared from Firebase");
    });
  } catch (error) {
    console.log("error clearing favourites from firebase");
  }
};

export {
  auth,
  db,
  LoginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  addFavoriteToFirebase,
  removeFavoriteFromFirebase,
  clearFavouritesFromFirebase,
};
