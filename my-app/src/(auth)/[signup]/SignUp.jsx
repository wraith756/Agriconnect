import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="auth-bg">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="circle-4"></div>
      <div className="circle-5"></div>
      <div className="auth-form-container">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create your account
          </h2>
          <p className="text-gray-600 mb-6">
            Or{' '}
            <Link to="/signin" className="link">
              sign in to your account
            </Link>
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="auth-form input"
            >
              <option value="">Select your role</option>
              <option value="Customer">Customer</option>
              <option value="Farmer">Farmer</option>
              <option value="Investor">Investor</option>
            </select>
          </div>

          <button type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp; 