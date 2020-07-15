import React, { useState } from 'react'
import ListSlider from '../list-slider/ListSlider'
import styles from './Offers.module.scss'

export default function Offers() {

  const [ offers ] = useState([
    {name: 'Offer1'},
    {name: 'Offer2'},
    {name: 'Offer3'},
    {name: 'Offer4'},
    {name: 'Offer5'},
    {name: 'Offer6'},
    {name: 'Offer7'},
    {name: 'Offer8'},
  ])

  return (
    <section className={styles.offers}>
      <h1 className={styles.offers__title}> Ofertas </h1>
      <ListSlider items={offers}/>
    </section>
  )
}
