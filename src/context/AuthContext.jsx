// context/AuthContext.jsx
// Covers Lab 2 Part 3 (Shared State with Context) and Part 5 (Protected Routes)
// Pattern: createContext → Provider with state → export custom hook

import { createContext, useContext, useState } from "react";
import { DEMO_CREDENTIALS } from "../data/mockData";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Pre-seed the demo user so the demo credentials always work
  const [users, setUsers] = useState([DEMO_CREDENTIALS]);
  const [user, setUser] = useState(null);

  /**
   * login — finds a matching account and sets the current user.
   * Returns { success, error? } so the form can show the right error.
   */
  function login(email, password) {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({ name: found.name, email: found.email });
      return { success: true };
    }
    return { success: false, error: "Invalid email or password." };
  }

  /**
   * signup — validates uniqueness, saves the new account, and logs them in.
   */
  function signup(name, email, password) {
    const exists = users.find((u) => u.email === email);
    if (exists) {
      return {
        success: false,
        error: "An account with this email already exists.",
      };
    }
    const newUser = { name, email, password };
    setUsers((prev) => [...prev, newUser]);
    setUser({ name, email });
    return { success: true };
  }

  /** logout — clears the current user. */
  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** useAuth — custom hook so any component can read auth state. */
export function useAuth() {
  return useContext(AuthContext);
}
