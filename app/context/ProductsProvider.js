import React, { createContext, useState } from 'react'

export const ProductsContext = createContext({})

export function ProductsProvider({ children }){

  const [ products, setProducts ] = useState([])
  const [ showcaseProduct, setShowcaseProduct ] = useState(null)

  return (
    <ProductsContext.Provider value={{ products, setProducts, showcaseProduct, setShowcaseProduct }}>
      { children }
    </ProductsContext.Provider>
  )
}