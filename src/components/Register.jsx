import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext/index'
import { doCreateUserWithEmailAndPassword } from '../firebase/auth'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);


  const { userLoggedIn } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }


  return (
    <div>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <h1>Create a New Account</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          autoComplete="email"
          required
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          disabled={isRegistering}
          type="password"
          autoComplete="new-password"
          required
          placeholder="enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          disabled={isRegistering}
          type="password"
          autoComplete="off"
          placeholder="confirm password"
          required
          value={confirmPassword}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
        <button type="submit" disabled={isRegistering}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
