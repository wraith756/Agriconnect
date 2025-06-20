import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white">
      Logout
    </button>
  );
}
