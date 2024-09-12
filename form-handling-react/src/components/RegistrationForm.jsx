import  { useState } from 'react';

const RegistrationForm = () => {
  // Define separate state variables for each input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state variable based on the input name
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', { username, email, password });
      // Here you can call your API to register the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username} // Controlled input directly using username state
            onChange={handleChange}
          />
        </label>
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email} // Controlled input directly using email state
            onChange={handleChange}
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password} // Controlled input directly using password state
            onChange={handleChange}
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;