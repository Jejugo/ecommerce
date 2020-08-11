import React, { createContext, useState, useEffect } from 'react'

export const ErrorContext = createContext({})

export function ErrorProvider({ children }){

  const [ toggleError, setToggleError ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState(null)

  useEffect(() => {
    if(toggleError){
      setTimeout(() => {
        setToggleError(false)
      }, 3000)
    }
  }, [ toggleError ])

  return (
    <ErrorContext.Provider value={{ toggleError, errorMessage, setErrorMessage, setToggleError }}>
      { children }
    </ErrorContext.Provider>
  )
}