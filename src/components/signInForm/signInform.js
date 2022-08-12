import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInWithEmailAndPass } from '../../utils/firebase/firebase.util'
import Button from "../button/button";
import FormInput from "../form-input/formInput";

import './signInForm.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }



  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };


  const handleSubmit = async (event) => {

    event.preventDefault();



    try {

      const response = await signInWithEmailAndPass(email, password);

      console.log(response);



      resetFormFields();


    } catch (error) {

      console.log(error);

      // if (error.code === "auth/wrong-password") {
      //   alert("There is an incorrect field")
      // }


      switch (error.code) {
        case 'auth/user-not-found':
          alert('Incorrect email associated');
          break
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        default:
          console.log(error);
      }

    }


  }

  const handleChange = (event) => {

    console.log(event.target)

    const { name, value } = event.target;

    setFormFields({
      ...formFields, [name]: value
    })

  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account ??</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
        <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>

      </form>
    </div>
  )

}


export default SignInForm;