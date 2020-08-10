import React, { useContext } from 'react'
import styles from './Error.module.scss'
import { ErrorContext } from '../../context/ErrorProvider'

export default function Error() {

  const { errorMessage, toggleError, setToggleError } = useContext(ErrorContext)

  const closeError = () => {
    setToggleError(false)
  }
  
  return (
    <div className={!toggleError ? styles.error : styles.error__show}>
      <p className={styles.error__message} onClick={closeError}> { errorMessage } </p>
    </div>
  )
}
