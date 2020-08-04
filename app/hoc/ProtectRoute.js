import react, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthProvider";

export default function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useContext(AuthContext);
    const router = useRouter();
    console.log('--------', user, isAuthenticated)
    useEffect(() => {
      if (!isAuthenticated && !loading) router.push("/login") // do something
      
    }, [ loading, isAuthenticated ]);

    return (
      isAuthenticated && <Component {...arguments} />
    )
  };
}
