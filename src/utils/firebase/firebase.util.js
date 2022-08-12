import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBPF4Rp7TB6SloSum_D3Iff2gn63boG2ts",
  authDomain: "shopping-app-nabham.firebaseapp.com",
  projectId: "shopping-app-nabham",
  storageBucket: "shopping-app-nabham.appspot.com",
  messagingSenderId: "206833911224",
  appId: "1:206833911224:web:312f911f4c1fa81e8ffb4d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additioninfo = {}) => {

  const userDocRef = doc(db, 'users', userAuth.uid)


  console.log(userDocRef)


  const userSnapShot = await getDoc(userDocRef);




  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();


    try {

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additioninfo
      })
    }

    catch (error) {
      console.log('There was error creating a doc', error.message)

    }
  }

  return userDocRef;
  //userDoesntexist


  //User data exist 

  //return userDocRef
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};




export const signInWithEmailAndPass = async (email, password) => {

  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)

}