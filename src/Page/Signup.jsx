
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (formData.name.trim() === '') {
      errors.name = 'Please enter your name';
      isValid = false;
    }

    if (formData.email.trim() === '') {
      errors.email = 'Please enter your email';
      isValid = false;
    } else if (!validateEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      errors.password = 'Please enter your password';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      Swal.fire('Success!', 'You have successfully signed up!', 'success');
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      setFormErrors({
        name: '',
        email: '',
        password: '',
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="https://img.freepik.com/free-vector/woman-man-holding-coffee-while-look-phone-check-social-media_10045-652.jpg?w=500"
          alt=""
          style={styles.image}
        />
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={formErrors.name ? styles.inputError : styles.input}
              required
            />
            {formErrors.name && <div style={styles.error}>{formErrors.name}</div>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={formErrors.email ? styles.inputError : styles.input}
              required
            />
            {formErrors.email && <div style={styles.error}>{formErrors.email}</div>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={formErrors.password ? styles.inputError : styles.input}
              required
            />
            {formErrors.password && <div style={styles.error}>{formErrors.password}</div>}
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  imageContainer: {
    marginRight: '50px',
  },
  image: {
    
  
  
  },
  formContainer: {
    width: '300px',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  inputError: {
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid red',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  button: {
    width: '100%',
    padding: '8px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: 'black',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default SignUp;
