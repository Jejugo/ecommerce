import React, { useState } from "react";
import styles from "./SubNavbar.module.scss";

export default function SubNavbar() {
  const [navbarItems] = useState([
    { name: "Categorias", url: "http://teste.com.br" },
    { name: "Ofertas", url: "http://teste2.com.br" },
    { name: "Mais vendidos", url: "http://teste3.com.br" },
  ]);

  return (
    <section className={`${styles.navbar__container} ${styles.flex}`}>
      <div className={styles.navbar__space}></div>
      <div className={styles.navbar__moreItems}>
        <ul className={`${styles.navbar__list} ${styles.flex}`}>
          {navbarItems.map(({ name, url }) => (
            <li className={`${styles.navbar__list_items}`}>
              <a className={`${styles.navbar__list_items_link}`} href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.navbar__authenticationItems} ${styles.flex}`}>
        <ul className={`${styles.navbar__authenticationItems_list} ${styles.flex}`}>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a>
              <span class="material-icons">face</span>
            </a>
          </li>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a>Teste</a>
          </li>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a>Teste</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
