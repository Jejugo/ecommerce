import React, { useContext } from 'react'
import styles from './Error.module.scss'
import { ErrorContext } from '../../context/ErrorProvider'

export default function Error() {

  const { errorMessage, toggleError } = useContext(ErrorContext)
  return (
    <div className={!toggleError ? styles.error : styles.error__show}>
      <p className={styles.error__message}> { errorMessage } </p>
    </div>
  )
}
