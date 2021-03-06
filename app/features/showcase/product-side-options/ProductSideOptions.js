import React from 'react'
import styles from './ProductSideOptions.module.scss'

const MINIMUN_quantity = 1

export default function ProductSideOptions({ quantity, setQuantity, product }) {
  const handleQuantity = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'quantity_down':
        if(quantity > MINIMUN_quantity) {
          setQuantity((prevState) => parseInt(prevState) - 1)
        }
        break
      case 'quantity_up':
        setQuantity((prevState) => parseInt(prevState) + 1)
        break
    }
  }

  return (
    <section className={`${styles.sideOptions} ${styles.flex}`}>
      <div className={styles.sideOptions__title}>
        <h1 className={styles.sideOptions__title_item}>
          { product && product.name }
        </h1>
      </div>
      <hr className={styles.line}></hr>
      <div
        className={`${styles.sideOptions__price} ${styles.flex} ${styles.itemCenter} ${styles.column}`}
      >
        { product && <p className={styles.sideOptions__price_text}>{`R$${product.price / 10}`}</p> }
        <div className={styles.sideOptions__price_quantity}>
          <div
            className={`${styles.flex} ${styles.column} ${styles.itemCenter} ${styles.center}`}
            onClick={handleQuantity}
          >
            <a
              className={styles.sideOptions__price_quantity_control}
              name="quantity_down"
            >
              -
            </a>
          </div>
          <input
            className={styles.sideOptions__price_quantity_input}
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div
            className={`${styles.flex} ${styles.column} ${styles.itemCenter} ${styles.itemCenter}`}
            onClick={handleQuantity}
          >
            <a
              className={styles.sideOptions__price_quantity_control}
              name="quantity_up"
            >
              +
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
