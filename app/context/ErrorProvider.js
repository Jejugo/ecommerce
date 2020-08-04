import React, { createContext, useState } from 'react'

export const ErrorContext = createContext({})

export function ErrorProvider({ children }){

  const [ toggleError, setToggleError ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState(null)

  return (
    <ErrorContext.Provider value={{ toggleError, errorMessage, setErrorMessage, setToggleError }}>
      { children }
    </ErrorContext.Provider>
  )
}