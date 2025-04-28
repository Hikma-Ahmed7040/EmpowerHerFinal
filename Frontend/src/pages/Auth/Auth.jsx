import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from "./SignUp.module.css";
import  {auth} from "../Utility/firebase"

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
      // Sign up validation
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
      
      // Mock sign up
      setTimeout(() => {
        setLoading(false);
        navigate(navStateData?.state?.redirect || "/", { replace: true });
      }, 1000);
    } else {
      // Sign in validation
      if (!email || !password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }
      
      // Mock sign in
      setTimeout(() => {
        if (email === "test@example.com" && password === "password123") {
          setLoading(false);
          navigate(navStateData?.state?.redirect || "/", { replace: true });
        } else {
          setError("Invalid email or password.");
          setLoading(false);
        }
      }, 1000);
    }
  };

  const toggleAuthMode = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setError("");
    // Clear form fields when toggling
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
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
        <form>
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
            onClick={authHandler} 
            className={classes.login__signInButton}
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>
      
        <div className={classes.auth__toggle}>
          {isSignUp ? (
            <span>
              Already have an account?{' '}
              <a href="#" onClick={toggleAuthMode} className={classes.toggle__link}>
                Sign in
              </a>
            </span>
          ) : (
            <span>
              New to EmpowerHer?{' '}
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