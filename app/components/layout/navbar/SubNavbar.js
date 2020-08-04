import React, { useState, useContext, useEffect } from 'react'
import styles from './SubNavbar.module.scss'
import UserDropdown from '../../user-dropdown/UserDropdown'
import { AuthContext } from '../../../context/AuthProvider'

export default function SubNavbar() {
  const { user, logout } = useContext(AuthContext)

  const [ navbarItems ] = useState([
    { name: 'Categorias', url: 'http://teste.com.br' },
    { name: 'Ofertas', url: 'http://teste2.com.br' },
    { name: 'Mais vendidos', url: 'http://teste3.com.br' },
  ])

  const [toggleUserDropdown, setToggleUserDropdown] = useState(false)

  function logoutFn(){
    logout()
  }

  const checkAuthentication = () => {
    if (user) {
      return (
        <>
          <li className={styles.navbar__authenticationItems_list_item}>
            <span
              className="material-icons"
              onClick={() =>
                setToggleUserDropdown(
                  (prevToggleUserDropdown) => !prevToggleUserDropdown
                )
              }
            >
              face
            </span>
          </li>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a className={styles.navbar__authenticationItems_list_item_link}>Teste</a>
          </li>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a className={styles.navbar__authenticationItems_list_item_link} onClick={logoutFn}>Log out</a>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a href="/signup" className={styles.navbar__authenticationItems_list_item_link}>
              Faça parte!
            </a>
          </li>
          <li className={styles.navbar__authenticationItems_list_item}>
            <a href="/login" className={styles.navbar__authenticationItems_list_item_link}>
              Login
            </a>
          </li>
        </>
      )
    }
  }

  return (
    <section className={`${styles.navbar__container} ${styles.flex}`}>
      <div className={styles.navbar__space}></div>
      <div className={styles.navbar__moreItems}>
        <ul className={`${styles.navbar__list} ${styles.flex}`}>
          {navbarItems.map(({ name, url }, index) => (
            <li className={`${styles.navbar__list_items}`} key={index}>
              <a className={`${styles.navbar__list_items_link}`} href={url}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${styles.navbar__authenticationItems} ${styles.flex}`}>
        <ul
          className={`${styles.navbar__authenticationItems_list} ${styles.flex}`}
        >
          {checkAuthentication()}
        </ul>
      </div>
      {toggleUserDropdown && <UserDropdown />}
    </section>
  )
}
