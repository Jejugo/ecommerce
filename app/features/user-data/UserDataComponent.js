import React, { Component, useContext, useState, createContext, useEffect } from 'react'
import styles from './UserDataComponent.module.scss'
import DataCategory from './data-category/DataCategory'
import { AuthContext } from '../../context/AuthProvider'

export const warningContext = createContext({})

export default function UserDataComponent(props) {

  const [ toggleWarning, setToggleWarning ] = useState(null)
  const [ messageWarning, setWarningMessage ] = useState('')

  const { user } = useContext(AuthContext)

  return (
    <warningContext.Provider value={{ setWarningMessage, setToggleWarning }}>
      <p> { messageWarning } </p>
      <section className={styles.userData}>
        <h1 className={styles.userData__title}>Meus dados</h1>
        <DataCategory user={user}></DataCategory>
      </section>
    </warningContext.Provider>
  )
}
