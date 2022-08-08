import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>


      <button onClick={logGoogleUser}>Sign In with Google</button>
      <h1>Sign In page</h1>
    </div>
  )
}




export default SignIn;