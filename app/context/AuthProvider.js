import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ErrorContext } from './ErrorProvider'
import axios from 'axios'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

  const router = useRouter()
  const { setToggleError, setErrorMessage } = useContext(ErrorContext)

  const [ user, setUser ] = useState(null)
  //setName, setCPF, setCards, setAddresses
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    async function loadUserFromSessionStorage() {
      const token = sessionStorage.getItem('accessToken')
      if (token) {
        const { data: { customer: { name } } } = await axios.get(`http://localhost:3002/customer/token/${token}`)
        if (name) setUser(name)
      }
      else {
        setUser(null)
      }
      setLoading(false)
    }

    loadUserFromSessionStorage()
  })


  const login = async (email, password) => {
    if(email && password){
      const registerPayload = {
        username: email,
        password
      }
      let sessionData = await fetch('http://localhost:3002/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerPayload)
      })
  
      sessionData = await sessionData.json() 

      if(sessionData.accessToken){
        const { accessToken, refreshToken, expiresIn } = sessionData
        sessionStorage.setItem('accessToken', accessToken)
        sessionStorage.setItem('refreshToken', refreshToken)
        sessionStorage.setItem('expiresIn', expiresIn)
        setUser(email)
        router.push('/')
      }
  
      else{
        setToggleError(true)
        setErrorMessage(sessionData.error.message)
        setUser(null)
      } 
    }

    else{
      setToggleError(true)
      setErrorMessage('Preencha todos os campos')
    }
  }

  const logout = (email, password) => {
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    sessionStorage.removeItem('expiresIn')
    setUser(null)
    window.location.pathname = '/login'
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
