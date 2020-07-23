import React, { useState } from 'react'
import styles from './UserDropdown.module.scss'

export default function UserDropdown() {
  const [userDropdownList] = useState(['Item1', 'Item2', 'Item3'])

  return (
    <div className={styles.userDropdown}>
      <h1 className={styles.userDropdown__title}> Olá pessoa x </h1>
      <hr />
      <ul className={styles.userDropdown__list}>
        <li className={styles.userDropdown__list_item}>
          <a>Item1</a>
        </li>
        <li className={styles.userDropdown__list_item}>
          <a>Item2</a>
        </li>
        <li className={styles.userDropdown__list_item}>
          <a>Item3</a>
        </li>
      </ul>
    </div>
  )
}
