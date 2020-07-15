import React, { useState } from 'react'
import styles from './LastVisit.module.scss'
import ListSlider from '../list-slider/ListSlider'

export default function LastVisit() {

  const [ products ] = useState([
    {name: 'Calça'},
    {name: 'Camiseta'},
    {name: 'Sapato'},
    {name: 'Jeans'},
    {name: 'Gravata'},
    {name: 'Calça'},
    {name: 'Camiseta'},
    {name: 'Sapato'},
    {name: 'Jeans'},
    {name: 'Gravata'},
  ])

  return (
    <section className={styles.lastVisit}>
      <h1 className={styles.lastVisit__title}> Baseado na sua última visita... </h1>
      <ListSlider items={products}/>
      <hr className={styles.line}></hr>
    </section>
  )
}
