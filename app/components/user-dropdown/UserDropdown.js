import React, { useState, useContext } from 'react'
import styles from './UserDropdown.module.scss'
import { AuthContext } from '../../context/AuthProvider'

export default function UserDropdown() {
  const [userDropdownList] = useState(['Item1', 'Item2', 'Item3'])

  const { user } = useContext(AuthContext)

  return (
    <div className={styles.userDropdown}>
      <h1 className={styles.userDropdown__title}> Olá { user.name } </h1>
      <hr />
      <ul className={styles.userDropdown__list}>
        <li className={styles.userDropdown__list_item}>
          <a className={styles.userDropdown__list_item_link} href="/dashboard/purchase">Compras</a>
        </li>
        <li className={styles.userDropdown__list_item}>
          <a className={styles.userDropdown__list_item_link}>Item2</a>
        </li>
        <li className={styles.userDropdown__list_item}>
          <a className={styles.userDropdown__list_item_link}>Item3</a>
        </li>
      </ul>
    </div>
  )
}
