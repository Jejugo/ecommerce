import React from 'react'
import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}
