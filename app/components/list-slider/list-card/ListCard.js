import React from 'react'
import styles from './ListCard.module.scss'

export default function ListCard({ items }) {

  function goToProductPage(item){
    window.location.href=`/product/${item.name.toLowerCase().replace(/\s/g, '-')}-${item.id}`
  }

  return (
    <>
      {items.map((item, index) => (
        <li className={styles.listCard} key={index} onClick={() => goToProductPage(item)}>
          <div className={styles.listCard__image}>
            <img className={styles.listCard__image_item} src={item.images[0]} />
          </div>
          <div className={styles.listCard__description}>
            <h2 className={styles.listCard__description_title}>{item.name}</h2>
            <p className={styles.listCard__description_text}>{item.description} </p>
          </div>
        </li>
      ))}
    </>
  )
}
