import React from 'react'
import Navbar from './navbar/Navbar'
import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${styles.layout}`}>{children}</main>
      <footer></footer>
    </>
  )
}
