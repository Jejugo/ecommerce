import React from "react";
import styles from "./Navbar.module.scss";
import SubNavbar from "./SubNavbar";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <section className={styles.navbar__container}>
        <ul className={`${styles.navbar__list} ${styles.flex}`}>
          <div className={`${styles.navbar__list_leftSide} ${styles.flex} ${styles.itemCenter}`}>
            <li className={`${styles.navbar__list_leftSide_title}`}><a href="http://localhost:3000">NOME_LOJA</a></li>
          </div>
          <div className={styles.navbar__list_searchBar}>
            <input
              className={styles.navbar__list_searchBar_input}
              type="text"
              placeholder="Digite o que deseja buscar"
            />
          </div>
          <div className={`${styles.navbar__list_items} ${styles.flex} ${styles.itemCenter} ${styles.flexEnd}`}>
            <li className={`${styles.navbar__list_items_item}`}>
              <span className={`material-icons ${styles.navbar__list_items_item_shoppingCart}`}>shopping_cart</span>
            </li>
          </div>
        </ul>
      </section>
      <SubNavbar />
    </nav>
  );
}
