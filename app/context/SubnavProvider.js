import React, { createContext, useState } from 'react'

export const SubnavContext = createContext({})

export function SubnavProvider({ children }){

  const [ subnavToggle, setSubnavToggle ] = useState(true)

  return (
    <SubnavContext.Provider value={{ subnavToggle, setSubnavToggle }}>
      { children }
    </SubnavContext.Provider>
  )
}