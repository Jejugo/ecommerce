import React from 'react'
import styles from './DashContainer.module.scss'

export default function DashContainer({ children }) {
  return (
    <div className={styles.dashboard}>
      { children }
    </div>
  )
}
