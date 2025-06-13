import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    // TODO: Implement signin logic
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
            Sign in to your account
          </h2>
          <p className="text-gray-600 mb-6">
            Or{' '}
            <Link to="/signup" className="link">
              create a new account
            </Link>
          </p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="link">
                Forgot your password?
              </a>
            </div>
          </div>

          <button type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn; 