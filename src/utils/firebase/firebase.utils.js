import { initializeApp } from 'firebase/app';

import { signOut, getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1NLHoOSgP_wrALLiU7w9ozWaNn9cipjw",
    authDomain: "crwn-clothing-j23.firebaseapp.com",
    projectId: "crwn-clothing-j23",
    storageBucket: "crwn-clothing-j23.appspot.com",
    messagingSenderId: "917035999650",
    appId: "1:917035999650:web:b92bfe98fe397ee9e1d2fb"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
        const userDocRef = doc(db, 'users', userAuth.uid)

        // console.log(userDocRef)

        const userSnapshot = await getDoc(userDocRef);

        // console.log(userSnapshot);
        if(!userSnapshot.exists()){
            const {displayName, email } = userAuth;
            const createdAt = new Date();
            try{
                    await setDoc(userDocRef, {
                        displayName,
                        email,
                        createdAt,
                        ...additionalInformation
                    });
            }
            catch (error){
                console.log('error creating the user', error.message);

            }
        }

        return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
        if(!email || !password) return;
        return await createUserWithEmailAndPassword(auth, email, password)
  }


  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = () => signOut(auth);