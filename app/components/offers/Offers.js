import React, { useContext } from 'react'
import ListSlider from '../list-slider/ListSlider'
import styles from './Offers.module.scss'
import { ProductsContext } from '../../context/ProductsProvider'

export default function Offers() {

  const { products } = useContext(ProductsContext)


  return (
    <section className={styles.offers}>
      <h1 className={styles.offers__title}> Ofertas </h1>
      <ListSlider items={products}/>
    </section>
  )
}
