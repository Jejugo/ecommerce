import React, { Component, useState } from 'react'
import styles from './UserCardData.module.scss'
import CardForm from '../../../components/form/credit-card/CardForm'
import Cards from 'react-credit-cards'

function UserCardData() {
  const [number, setNumber] = useState({
    name: 'number',
    value: '',
    placeholder: 'Número do cartão',
  })
  const [name, setName] = useState({
    name: 'name',
    value: '',
    placeholder: 'Nome',
  })
  const [expiration, setExpiration] = useState({
    name: 'expiry',
    value: '',
    placeholder: 'DD/MM/YYYY',
  })
  const [cvc, setCVC] = useState({ name: 'cvc', value: '', placeholder: 'CVC' })

  const [focus, setFocus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      number: number.value,
      name: name.value,
      expiration: expiration.value,
      cvc: cvc.value
    }


  }

  function handleInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    switch (name) {
      case 'number':
        setNumber((prevState) => ({
          ...prevState,
          value,
        }))
        break
      case 'name':
        setName((prevState) => ({
          ...prevState,
          value,
        }))
        break
      case 'expiry':
        setExpiration((prevState) => ({
          ...prevState,
          value,
        }))
        break
      case 'cvc':
        setCVC((prevState) => ({
          ...prevState,
          value,
        }))
        break
      default:
        return null
    }
  }

  return (
    <section className={styles.userCard}>
      <Cards
        number={number.value}
        name={name.value}
        expiry={expiration.value}
        cvc={cvc.value}
        focused={focus}
      />
      <CardForm
        formState={[number, name, expiration, cvc]}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        setFocus={setFocus}
      ></CardForm>
    </section>
  )
}

export default UserCardData
