import React from 'react'
import styles from './DataCategory.module.scss'

export default function DataCategory({ card }) {
  console.log(card)
  return (
    <section className={styles.dataCategory}>
      <h2 className={styles.dataCategory__card}> {card.title}</h2>
      <ul className={styles.dataCategory__list}>
        {card.data.map((item) => {
          return (
            <>
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
                      
                    ></input>
                  </li>
                </div>
                <div
                  className={`${styles.dataCategory__list_rowRight} ${styles.flex}`}
                >
                  <li
                    className={`${styles.dataCategory__list_row_item} ${styles.dataCategory__list_row_symbol}`}
                  >
                    <button
                      className={styles.dataCategory__list_row_item_button}
                    >
                      Editar
                    </button>
                  </li>
                </div>
              </div>
            </>
          )
        })}
      </ul>
    </section>
  )
}
