import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../components/signUp/signUp-form';
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.util';

const SignIn = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);


  //   }
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };





  return (
    <div>


      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignUpForm />
    </div>
  )
}




export default SignIn;