import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error);
      alert("Invalid login credentials");
      return;
    }

    // Fetch user metadata
    const { user } = data;

    if (!user) {
      alert("User not found");
      return;
    }

    const role = user.user_metadata?.role;
    console.log("Logged in user role:", role);

    // Redirect based on role
    if (role === "Farmer") {
      navigate("/farmer-dashboard");
    } else if (role === "Customer") {
      navigate("/customer-dashboard"); // ✅ updated
    } else if (role === "Investor") {
      navigate("/investor-dashboard");
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
            Sign in to your account
          </h2>
          <p className="text-gray-600 mb-6">
            Or{" "}
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
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
