import React, { useState, useEffect, useContext } from 'react'
import styles from './LastVisit.module.scss'
import ListSlider from '../list-slider/ListSlider'
import { retrieveProducts } from '../../services/products'
import { ProductsContext } from '../../context/ProductsProvider'

export default function LastVisit() {

  const { products } = useContext(ProductsContext)

  return (
    <section className={styles.lastVisit}>
      <h1 className={styles.lastVisit__title}> Baseado na sua última visita... </h1>
      <ListSlider items={products}/>
      <hr className={styles.line}></hr>
    </section>
  )
}