import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/bookPass.module.css';
import '../styles/global.css';
import { FaChevronLeft } from 'react-icons/fa6';
import { AiOutlineExclamationCircle } from 'react-icons/ai'; 

const BookPass = () => {
  const [bookPassID, setBookPassID] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ bookPassID: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    let idError = '';
    let passwordError = '';

    if (!bookPassID) idError = 'Please enter your book pass id.';
    if (!password) passwordError = 'Please enter your password.';

    setErrors({ bookPassID: idError, password: passwordError });

    if (!idError && !passwordError) {
      // Perform login logic here
      console.log('Form submitted');
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/login">
        <FaChevronLeft className={styles.back} />
      </Link>
      <div className={styles.logo}>
        <img src={require('../assets/main-logo.png')} alt="Childhood Logo" />
      </div>
      <h1 className={styles.title}>
        Spark your child's imagination.<br />
        Get your Book Pass now.
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <h5>Book Pass ID</h5>
          <input
            type="text"
            name="bookPassID"
            placeholder="Book pass id"
            value={bookPassID}
            onChange={(e) => setBookPassID(e.target.value)}
            className={`${styles.input} ${errors.bookPassID ? styles.errorInput : ''}`}
          />
          {errors.bookPassID && (
            <p className={styles.errorMessage}>
              <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.bookPassID}
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

        <button type="submit" className={styles.loginButton}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default BookPass;
