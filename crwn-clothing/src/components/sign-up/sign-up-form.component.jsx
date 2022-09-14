import { useState } from 'react';
import { auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    if (password !== confirmPassword) return;
    try {
      const {user} = await createAuthUserWithEmailAndPassword( email, password);
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
      } catch(error) {
      console.log('erroe'+ error)
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error)
      }
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display name" name="displayName" type="text" onChange={handleChange} value={displayName} />

        <FormInput label="Email" name="email" type="email" value={email} onChange={handleChange} />

        <FormInput label="Password" name="password" type="password" onChange={handleChange} value={password} />

        <FormInput label="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange} type="password" />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;
