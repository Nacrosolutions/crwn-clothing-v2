import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignInForm from '../../components/signInForm/signInform';
import SignUpForm from '../../components/signUp/signUp-form';
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../utils/firebase/firebase.util';
import './authenticate.scss';
const Authentication = () => {

  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);


  //   }
  // }, [])

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };





  return (
    <div className='authentication-container'>


      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign In with Google</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button> */}
      <SignUpForm />
    </div>
  )
}




export default Authentication;