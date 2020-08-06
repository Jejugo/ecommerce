import React from 'react'
import styles from './DataCategory.module.scss'

export default function DataCategory({ card }) {
  return (
    <section className={styles.dataCategory}>
      <h2 className={styles.dataCategory__card}> {card.title}</h2>
      <ul className={styles.dataCategory__list}>
        {card.data.map((item) => {
          return (
            <>
              <div className={styles.dataCategory__list_row}>
                <li className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_name}`}>
                  <p className={styles.dataCategory__list_row_item_text}>{item.name}</p>
                </li>
                <li className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_value}`}>
                  <p className={styles.dataCategory__list_row_item_text}>{item.value}</p>
                </li>
              </div>
            </>
          )
        })}
      </ul>
    </section>
  )
}
