import React, { Component, useContext, useState, createContext, useEffect } from 'react'
import styles from './UserDataComponent.module.scss'
import DataCategory from './data-category/DataCategory'
import { AuthContext } from '../../context/AuthProvider'

export const warningContext = createContext({})

export default function UserDataComponent(props) {

  const [ toggleWarning, setToggleWarning ] = useState(false)
  const [ messageWarning, setWarningMessage ] = useState({ message: '', success: false })

  const { user } = useContext(AuthContext)

  useEffect(() => {
    console.log('mudou')
    console.log(messageWarning)
  }, [ messageWarning ])

  return (
    <warningContext.Provider value={{ setWarningMessage, setToggleWarning }}>
      { messageWarning.message && <div className={!messageWarning.success ? `${styles.warning}` : `${styles.warning} ${styles.warning__success}`}><p className={styles.warning__text}> { messageWarning.message } </p></div> }
      <section className={styles.userData}>
        <h1 className={styles.userData__title}>Meus dados</h1>
        <DataCategory user={user}></DataCategory>
      </section>
    </warningContext.Provider>
  )
}
