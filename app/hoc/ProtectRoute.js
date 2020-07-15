import react, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthProvider";

export default function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useContext(AuthContext);
    console.log("isAuthenticated: ", isAuthenticated);
    console.log("loading: ", loading);
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) router.push("/login");
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
