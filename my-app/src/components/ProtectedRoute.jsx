import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function ProtectedRoute({ allowedRoles, children }) {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login");
        return;
      }

      const user = session.user;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        navigate("/login");
        return;
      }

      if (allowedRoles.includes(profile.role)) {
        setHasAccess(true);
      } else {
        navigate("/login");
      }

      setLoading(false);
    };

    checkAuth();
  }, [allowedRoles, navigate]);

  if (loading) return <div>Loading...</div>;

  return hasAccess ? children : null;
}
