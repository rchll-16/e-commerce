import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineExclamationCircle } from 'react-icons/ai'; 
import styles from '../styles/login.module.css';
import '../styles/global.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!email) emailError = 'Please enter your Childhood email or username.';
    if (!password) passwordError = 'Please enter your password.';

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      // Perform login logic here
      console.log('Form submitted');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require('../assets/main-logo.png')} alt="Childhood Logo" />
      </div>
      <h1 className={styles.title}>Log in to Childhood</h1>

      <div className={styles.authButtons}>
        <button className={styles.googleButton}>
          <img src={require('../assets/icons/Google.png')} alt="Google" /> Continue with Google
        </button>
        <Link to="/bookPass">
          <button className={styles.bookPassButton}>
            <img src={require('../assets/icons/Password Book.png')} alt="Book Pass" /> Continue with Book Pass
          </button>
        </Link>
      </div>

      <div className={styles.divider}></div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <h5>Email or username</h5>
          <input
            type="text"
            name="username"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
          />
          {errors.email && (
            <p className={styles.errorMessage}>
              <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.email}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
          />
          {errors.password && (
            <p className={styles.errorMessage}>
              <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.password}
            </p>
          )}
        </div>

        <button type="submit" className={styles.loginButton}>Log in</button>
      </form>

      <div className={styles.extraOptions}>
        <Link to="/forgotPass" className={styles.forgotPassword}>Forgot your password?</Link>
        <p>
          Don’t have an account?{' '}
          <Link to="/signUp" className={styles.signUp}>Sign up for Childhood</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
