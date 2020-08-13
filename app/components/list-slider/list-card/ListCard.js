import React from 'react'
import styles from './ListCard.module.scss'

export default function ListCard({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <li className={styles.listCard} key={index}>
          <div className={styles.listCard__image}>
            <img className={styles.listCard__image_item} src="https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-front-sabaton-T15003.png" />
          </div>
          <div className={styles.listCard__description}>
            <h2 className={styles.listCard__description_title}>Product name</h2>
            <p className={styles.listCard__description_text}> Description </p>
          </div>
        </li>
      ))}
    </>
  )
}
