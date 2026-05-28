// components/ProtectedRoute.jsx
// Covers Lab 2 Part 5 — Protected Routes
// If there is no logged-in user, redirect to /login.
// Otherwise, render the child page.

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
