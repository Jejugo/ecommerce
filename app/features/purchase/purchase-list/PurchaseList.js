import React from 'react'
import styles from './PurchaseList.module.scss'

export default function PurchaseList() {
  return (
    <div className={styles.purchaseList}>
      <ul className={styles.purchaseList__list}>
        <li className={styles.purchaseList__list_item}>
          <a className={styles.purchaseList__list_link}> Item 1</a>
        </li>
        <li className={styles.purchaseList__list_item}>
          <a className={styles.purchaseList__list_link}> Item 1</a>
        </li>
        <li className={styles.purchaseList__list_item}>
          <a className={styles.purchaseList__list_link}> Item 1</a>
        </li>
      </ul>
    </div>
  )
}
