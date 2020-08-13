import React, { useEffect, useRef } from 'react'
import styles from './ListSlider.module.scss'
import ListCard from './list-card/ListCard'

export default function ListSlider(props) {

  const itemList = useRef(null)

  function handleScrollRight(e){
    e.preventDefault()
    scrollLeft(itemList.current, 750, 500)
  }

  function handleScrollLeft(e){
    e.preventDefault()
    scrollLeft(itemList.current, -750, 500)
  }

  function scrollLeft(element, change, duration) {
    const start = element.scrollLeft
    const increment = 20
    let currentTime = 0
        
    const animateScroll = () => {        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
  }

  Math.easeInOutQuad = (t, b, c, d) => {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  return (
    <div className={`${styles.lastVisitItems} ${styles.flex}`}>
      <button className={styles.lastVisitItems__btn} onClick={handleScrollLeft}><i className="bx bxs-chevron-left"></i></button>
      <ul className={`${styles.lastVisitItems__list} ${styles.flex}`} ref={itemList}>
        <ListCard items={props.items}></ListCard>
      </ul>
      <button className={styles.lastVisitItems__btn} onClick={handleScrollRight}><i className="bx bxs-chevron-right"></i></button>
    </div>
  )
}
