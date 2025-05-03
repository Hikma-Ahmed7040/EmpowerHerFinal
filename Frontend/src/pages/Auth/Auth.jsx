// src/pages/Auth.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../Utility/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import classes from "./SignUp.module.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const navStateData = useLocation();

  const authHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password should be at least 6 characters long");
        setLoading(false);
        return;
      }
      if (!name.trim()) {
        setError("Name is required");
        setLoading(false);
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
        navigate(navStateData?.state?.redirect || "/", { replace: true });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate(navStateData?.state?.redirect || "/", { replace: true });
      } catch (err) {
        setError("Invalid email or password.");
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setError("");
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  return (
    <section className={classes.login}>
      <div className={classes.logo__container}>
        <h1 className={classes.logo_text}>EmpowerHer</h1>
      </div>
      <div className={classes.login__container}>
        <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
        {navStateData?.state?.msg && (
          <small style={{ padding: "5px", textAlign: "center", color: "red", fontWeight: "bold" }}>
            {navStateData?.state?.msg}
          </small>
        )}
        <form onSubmit={authHandler}>
          {isSignUp && (
            <div>
              <label htmlFor="name">Your Name</label>
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                id="name" 
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              id="email" 
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              id="password" 
              placeholder={isSignUp ? "At least 6 characters" : ""}
            />
          </div>
          {isSignUp && (
            <div>
              <label htmlFor="confirmPassword">Re-enter Password</label>
              <input 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                type="password" 
                id="confirmPassword" 
              />
            </div>
          )}
          <button 
            type="submit" 
            className={classes.login__signInButton}
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        <div className={classes.auth__toggle}>
          {isSignUp ? (
            <span>
              Already have an account?{" "}
              <a href="#" onClick={toggleAuthMode} className={classes.toggle__link}>
                Sign in
              </a>
            </span>
          ) : (
            <span>
              New to EmpowerHer?{" "}
              <a href="#" onClick={toggleAuthMode} className={classes.toggle__link}>
                Create an account
              </a>
            </span>
          )}
        </div>
        {error && (
          <small style={{ padding: "10px", color: "red" }}>
            {error}
          </small>
        )}
      </div>
    </section>
  );
}

export default Auth;
