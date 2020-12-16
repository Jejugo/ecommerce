import React from 'react'
import styles from './ProductSideOptions.module.scss'

const MINIMUN_amount = 1

export default function ProductSideOptions({ amount, setAmount, product }) {
  const handleAmount = (e) => {
    e.preventDefault()
    switch (e.target.name) {
      case 'amount_down':
        if(amount > MINIMUN_amount) {
          setAmount((prevState) => parseInt(prevState) - 1)
        }
        break
      case 'amount_up':
        setAmount((prevState) => parseInt(prevState) + 1)
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
        <p className={styles.sideOptions__price_text}>R$10</p>
        <div className={styles.sideOptions__price_amount}>
          <div
            className={`${styles.flex} ${styles.column} ${styles.itemCenter} ${styles.center}`}
            onClick={handleAmount}
          >
            <a
              className={styles.sideOptions__price_amount_control}
              name="amount_down"
            >
              -
            </a>
          </div>
          <input
            className={styles.sideOptions__price_amount_input}
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div
            className={`${styles.flex} ${styles.column} ${styles.itemCenter} ${styles.itemCenter}`}
            onClick={handleAmount}
          >
            <a
              className={styles.sideOptions__price_amount_control}
              name="amount_up"
            >
              +
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
