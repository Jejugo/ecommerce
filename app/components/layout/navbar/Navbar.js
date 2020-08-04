import React, { useContext, useEffect } from "react";
import styles from "./Navbar.module.scss";
import SubNavbar from "./SubNavbar";
import { SubnavContext } from "../../../context/SubnavProvider";
import { AuthContext } from "../../../context/AuthProvider";

export default function Navbar() {

  const { subnavToggle } = useContext(SubnavContext)
  const { user } = useContext(AuthContext)
  
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
            <li className={`${styles.navbar__list_items_item}`}>
              <span> Bem vindo {user} </span>
            </li>
          </div>
        </ul>
      </section>
      { subnavToggle && <SubNavbar /> }
    </nav>
  );
}
