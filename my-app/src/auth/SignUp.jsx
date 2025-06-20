import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [matchError, setMatchError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      validatePassword(value);
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setMatchError("⚠️ Passwords do not match.");
      } else {
        setMatchError("");
      }
    }

    if (name === "password" && formData.confirmPassword !== "") {
      if (formData.confirmPassword !== value) {
        setMatchError("⚠️ Passwords do not match.");
      } else {
        setMatchError("");
      }
    }
  };

  const validatePassword = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/.test(
      password
    );
    const isValidLength = password.length >= 8;

    if (
      hasLowercase &&
      hasUppercase &&
      hasDigit &&
      hasSpecialChar &&
      isValidLength
    ) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Password must include:\n✔ Uppercase (A–Z),\n✔ Lowercase (a–z),\n✔ Number (0–9),\n✔ Symbol (!@#...),\n✔ Min 8 characters"
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, role } = formData;

    if (password !== confirmPassword) {
      setMatchError("⚠️ Passwords do not match.");
      return;
    }

    if (passwordError) {
      alert("Password does not meet all requirements.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            fullName,
            role,
          },
        },
      });

      if (error) {
        console.error("Supabase signup error:", error);
        alert(error.message);
      } else {
        setSuccessMessage("✅ Signup successful! Please verify via email.");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
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
            Or{" "}
            <Link to="/login" className="link">
              Sign in to your account
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
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
            />
            {passwordError && (
              <div className="text-sm mt-2 p-2 rounded bg-red-50 border border-red-300 text-red-700 whitespace-pre-line">
                {passwordError}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {matchError && (
              <div className="text-sm mt-1 text-red-600">{matchError}</div>
            )}
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

          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>

          {successMessage && (
            <div className="mt-4 p-2 bg-green-100 text-green-800 border border-green-300 rounded text-sm">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
