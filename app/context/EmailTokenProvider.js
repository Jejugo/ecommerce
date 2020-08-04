import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const EmailTokenContext = createContext({})

export default function EmailTokenProvider({ children }) {
  const [ token, setToken ] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const { verified } = router.query
    if (verified) {
      setToken(verified)
    }
  })

  return (
    <EmailTokenContext.Provider value={{ token, setToken }}>
      {children}
    </EmailTokenContext.Provider>
  )
}
