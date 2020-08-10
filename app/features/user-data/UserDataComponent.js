import React, { Component, useContext } from 'react'
import styles from './UserDataComponent.module.scss'
import DataCategory from './data-category/DataCategory'
import { AuthContext } from '../../context/AuthProvider'

export default function UserDataComponent(props) {
    const { user } = useContext(AuthContext)

    return (
      <section className={styles.userData}>
        <h1 className={styles.userData__title}>Meus dados</h1>
        <DataCategory user={user}></DataCategory>
      </section>
    )

  }