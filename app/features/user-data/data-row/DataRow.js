import React from 'react'
import styles from './DataRow.module.scss'

export default function DataRow({ userData }) {
  return (
    <ul className={styles.dataCategory__list}>
      {userData.map((item) => (
        <div className={styles.dataCategory__list_row}>
          <div
            className={`${styles.dataCategory__list_rowLeft} ${styles.flex}`}
          >
            <li
              className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_name}`}
            >
              <p className={styles.dataCategory__list_row_item_text}>
                {item.name}
              </p>
            </li>
            <li
              className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_value}`}
            >
              <input
                className={styles.dataCategory__list_row_item_value}
                type="text"
                value={item.value}
                disabled={!item.value}
              ></input>
            </li>
          </div>
          <div
            className={`${styles.dataCategory__list_rowRight} ${styles.flex}`}
          >
            <li
              className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_symbol}`}
            >
              <button className={styles.dataCategory__list_row_item_button}>
                Editar
              </button>
            </li>
          </div>
        </div>
      ))}
    </ul>
  )
}
