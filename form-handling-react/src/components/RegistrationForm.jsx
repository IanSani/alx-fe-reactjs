import  { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
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
            value={formData.username} // Controlled input
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
            value={formData.email} // Controlled input
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
            value={formData.password} // Controlled input
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