import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signIn = (email) => {
    // Demo auth — accepts the seeded demo credentials shown on the login page.
    const name = email.split('@')[0] || 'User'
    const display = name.charAt(0).toUpperCase() + name.slice(1)
    const initials = display
      .split(/[._-]/)
      .map((part) => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('') || 'U'
    setUser({ email, name: display, initials: initials.length === 1 ? initials + 'M' : initials })
  }

  const signOut = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
