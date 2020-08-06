import React from 'react'
import styles from './SideNav.module.scss'

export default function SideNav() {
  return (
    <aside className={styles.sidenav}>
      <a className={styles.sidenav__item} href="/dashboard/purchase"> Pedidos </a>
      <a className={styles.sidenav__item} href="/dashboard/user-data"> Meus dados </a>
    </aside>
  )
}
