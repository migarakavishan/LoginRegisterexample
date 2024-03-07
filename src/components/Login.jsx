import React, { useState } from 'react'
import { useAuth } from '../contexts/authContext/index'
import { Navigate, Link } from 'react-router-dom'
import { doSignInWithEmailAndPassword} from '../firebase/auth'

function Login() {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
            // doSendEmailVerification()
        }
    }


  return (
    <div>
    {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          autoComplete="email"
          required
          placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
        ></input>
        <input
          type="password"
          autoComplete="current-password"
          required
          placeholder="enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit" disabled={isSigningIn}>Login</button>
      </form>
      <p>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
    </div>
  );
}

export default Login;
