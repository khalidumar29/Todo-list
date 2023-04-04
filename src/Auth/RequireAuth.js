import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!user) {
    return <Navigate to='/log-in' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
