import './sign-in-form.styles.scss';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import { useState } from 'react';
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      console.log(email, password)
      await signInAuthUserWithEmailAndPassword(email, password);
      // await createUserDocumentFromAuth(user, {email})
      resetFormFields()
      } catch(error) {
        switch(error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email')
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email')
            break;
          default:
            console.log(error)
        }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" name="email" type="email" value={email} onChange={handleChange} />
        <FormInput label="Password" name="password" type="password" onChange={handleChange} value={password} />
        <div className="button-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;
