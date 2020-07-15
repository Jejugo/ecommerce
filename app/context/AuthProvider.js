import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [ user, setUser ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token')
      if (token) {
          console.log("Got a token in the cookies, let's see if it is valid")
          const authorization = `Bearer ${token}`
          const { data: user } = await axios.get('users/me')
          if (user) setUser(user);
      }
      setLoading(false)
    }

    loadUserFromCookies()
  })

  const login = async (email, password) => {
    const { data: token } = await axios.post('auth/login', { email, password })
    if (token) {
        console.log("Got token")
        Cookies.set('token', token, { expires: 60 })
        const authorization = `Bearer ${token.token}`
        const { data: user } = await axios.get('users/me')
        setUser(user)
        console.log("Got user", user)
    }
  }

  const logout = (email, password) => {
    Cookies.remove('token')
    setUser(null)
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
