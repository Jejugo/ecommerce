import React from "react";
import styles from './ListSlider.module.scss'

export default function ListSlider({ items }) {
  return (
    <div className={`${styles.lastVisitItems} ${styles.flex}`}>
      <button>Prev</button>
      <ul className={`${styles.lastVisitItems__list} ${styles.flex}`}>
        {items.map((item, index) => (
          <li className={styles.lastVisitItems__list_item} key={index}>
            <a> {item.name} </a>
          </li>
        ))}
      </ul>
      <button>Next</button>
    </div>
  );
}
