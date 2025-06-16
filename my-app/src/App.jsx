import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import FarmerDashboard from "./dashboard/FarmerDashboard";
import InvestorDashboard from "./dashboard/InvestorDashboard";
import CustomerDashboard from "./dashboard/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./nondashboard/Landing/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/investor-dashboard" element={<InvestorDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
