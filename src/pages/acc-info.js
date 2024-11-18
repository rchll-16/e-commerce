import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/accInfo.module.css";
import "../styles/global.css";
import { AiOutlineExclamationCircle } from 'react-icons/ai'; 
import { FaChevronLeft, FaChevronUp, FaChevronDown } from "react-icons/fa";

const AccInfo = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);
  const previousStep = () => setStep(1);

  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");

  const toggleDropdown = () => setMonthDropdownOpen(!isMonthDropdownOpen);
  
  const handleMonthSelect = (month) => {
    setSelectedMonth(month);  // Update the selected month for display
    setDob({ ...dob, month }); // Update dob.month when a month is selected
    setMonthDropdownOpen(false); // Close dropdown after selecting a month
  };
  

  const [activeLabel, setActiveLabel] = useState(null);

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  // State to track form errors
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleValidation = () => {
    const newErrors = {};

    // Simple validation for the form fields
    if (!password) newErrors.password = "Please enter your password";
    if (!confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!email) newErrors.email = "Please enter your email.";
    if (!name) newErrors.name = "Please enter your name";
    if (!phone) newErrors.phone = "Please enter your phone number.";
    if (!gender) newErrors.gender = "Please enter your gender";
    if (!dob.day || !dob.month || !dob.year)
      newErrors.dob = "Please enter your birth date.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  

  // Form Data State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState({ day: "", month: "", year: "" });

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require("../assets/main-logo.png")} alt="Childhood" />
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={step >= 1 ? styles.activeProgress : styles.inactiveProgress}
        />
        <div
          className={step === 2 ? styles.activeProgress : styles.inactiveProgress}
        />
      </div>

      {/* Step Content */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <div className={styles.stepHeader}>
            <Link to="/signUp">
              <FaChevronLeft className={styles.back} />
            </Link>
            <div className={styles.stepDetails}>
              <div className={styles.stepTitle}>Step 1 of 2</div>
              <div className={styles.stepDescription}>Account Information</div>
            </div>
          </div>
          <form>
            <label>Password</label>
            <div className={styles.inputContainer}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${styles.input} ${errors.password ? styles.errorInput : ''}`}
              />
            </div>
            {errors.password && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.password}
              </p>
            )}

            <label>Confirm Password</label>
            <div className={styles.inputContainer}>
              <input
                type="password"
                placeholder="Re-type password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`${styles.input} ${errors.confirmPassword ? styles.errorInput : ''}`}
              />
            </div>
            {errors.confirmPassword && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.confirmPassword}
              </p>
            )}
            <label>Email</label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
              />
            </div>
            {errors.email && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.email}
              </p>
            )}

            <label>Name</label>
            <p>This name will appear on your profile</p>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${styles.input} ${errors.name ? styles.errorInput : ''}`}
              />
            </div>
            {errors.name && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.name}
              </p>
            )}

            <label>Phone Number</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`${styles.input} ${errors.phone ? styles.errorInput : ''}`}
              />
            </div>
            {errors.phone && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.phone}
              </p>
            )}

            <label>Gender</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className={styles.radioInput}
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className={styles.radioInput}
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className={styles.radioInput}
                  checked={gender === "Other"}
                  onChange={() => setGender("Other")}
                />
                Other
              </label>
            </div>
            {errors.gender && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.gender}
              </p>
            )}

            <label>Date of Birth</label>
            <div className={styles.dobGroup}>
              <input
                type="text"
                placeholder="dd"
                maxLength={2}
                value={dob.day}
                onChange={(e) => setDob({ ...dob, day: e.target.value })}
              />
              <div className={styles.monthInputWrapper}>
                <input
                  type="text"
                  placeholder="Month"
                  readOnly
                  value={selectedMonth || dob.month} // Use selectedMonth or dob.month
                  onClick={toggleDropdown}
                />
                {isMonthDropdownOpen ? (
                  <FaChevronDown onClick={toggleDropdown} className={styles.chevronIcon} />
                ) : (
                  <FaChevronUp onClick={toggleDropdown} className={styles.chevronIcon} />
                )}
                {isMonthDropdownOpen && (
                  <ul className={styles.monthDropdown}>
                    {months.map((month, index) => (
                      <li
                        key={index}
                        onClick={() => handleMonthSelect(month)} // Update dob.month here
                        className={styles.monthOption}
                      >
                        {month}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <input
                type="text"
                placeholder="yyyy"
                maxLength={4}
                value={dob.year}
                onChange={(e) => setDob({ ...dob, year: e.target.value })}
              />
            </div>
            {errors.dob && (
              <p className={styles.errorMessage}>
                <AiOutlineExclamationCircle className={styles.errorIcon} /> {errors.dob}
              </p>
            )}

          </form>
          <button onClick={() => {
            if (handleValidation()) nextStep();
          }} className={styles.nextBtn}> Next </button>
        </div>
      )}

      {step === 2 && (
        <div className={styles.stepContent}>
          <div className={styles.stepHeader}>
            <button onClick={previousStep}>
              <FaChevronLeft className={styles.back} />
            </button>
            <div className={styles.stepDetails}>
              <div className={styles.stepTitle}>Step 2 of 2</div>
              <div className={styles.stepDescription}>Account Address</div>
            </div>
          </div>

          <form>
            <label>Postal Code</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Postal Code"
                className={styles.input}
              />
            </div>
            <label>Street Name, Building, House No</label>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Street"
                className={styles.input}
              />
            </div>
          </form>
          <div className={styles.googleMap}>Google Map</div>
          <div className={styles.labelHW}>
            <label>Label</label>
            <div className={styles.labelButtons}>
              <button
                className={`${styles.labelButton} ${
                  activeLabel === "Home" ? styles.active : ""
                }`}
                onClick={() => handleLabelClick("Home")}
              >
                Home
              </button>
              <button
                className={`${styles.labelButton} ${
                  activeLabel === "Work" ? styles.active : ""
                }`}
                onClick={() => handleLabelClick("Work")}
              >
                Work
              </button>
            </div>
          </div>
          <Link to='/home'>
            <button className={styles.signUpBtn}>Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccInfo;
