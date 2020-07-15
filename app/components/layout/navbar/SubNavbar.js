import React, { useState } from 'react'
import styles from "./SubNavbar.module.scss";

export default function SubNavbar() {

  const [ navbarItems ] = useState([
    { name: 'Categorias', url: 'http://teste.com.br'},
    { name: 'Ofertas', url: 'http://teste2.com.br'},
    { name: 'Mais vendidos', url: 'http://teste3.com.br'},
  ])


  return (
    <section className={styles.navbar__container}>
      <ul className={`${styles.navbar__list} ${styles.flex}`}>
        {
          navbarItems.map(({name, url}) => (
            <li className={`${styles.navbar__list_items}`}>
              <a href={url}>{name}</a>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
