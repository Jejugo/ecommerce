import React from 'react'
import styles from './PurchaseComponent.module.scss'
import PurchaseList from './purchase-list/PurchaseList'

export default function PurchaseComponent() {
  return (
    <div className={styles.purchase}>
      <h1 className={styles.purchase__title}> Compras </h1>
      <PurchaseList />
    </div>
  )
}
