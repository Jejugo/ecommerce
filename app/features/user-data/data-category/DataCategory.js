import React, { useState, useEffect, useContext } from 'react'
import styles from './DataCategory.module.scss'
import DataRow from '../data-row/DataRow'
import { ErrorContext } from '../../../context/ErrorProvider'

export default function DataCategory({ user }) {

  const { setToggleError, setErrorMessage } = useContext(ErrorContext)

  const [ userData, setUserData ] = useState([
    { name: 'E-mail', value: user.email },
  ])

  const [ personalData, setPersonalData ] = useState([
    { name: 'Nome', value: user.name },
    { name: 'CPF', value: user.securityNumber },
    { name: 'E-mail', value: user.email }
  ])

  const [ bankCardData, setBankCardData ] = useState(
    user.bankCards.map((card) => ({
      flag: card.flag,
      number: card.number,
      expiration: card.expiration,
      cvv: card.cvv,
    }))
  )

  const [ addressData, setAddress ] = useState([{
  street: user.address.street,
    neighborhood: user.address.neighborhood,
    number: user.address.number,
    zipcode: user.address.zipcode,
    complement: user.address.complement
  }])

  useEffect(() => {
    if(bankCardData.length === 0){
      console.log('ha')
      setToggleError(true)
      setErrorMessage('Não há cartões. Adicione um para realizar suas compras!')
      setBankCardData([
        { name: 'Nãoo há cartões adicionados.' }
      ])
    }

  }, [ bankCardData ])

  return (
    <section className={styles.dataCategory}>
      <h2 className={styles.dataCategory__card}> Dados de Usuário </h2>
      <DataRow userData={userData}></DataRow>
      <h2 className={styles.dataCategory__card}> Dados Pessoais</h2>
      <DataRow userData={personalData}></DataRow>
      <h2 className={styles.dataCategory__card}> Dados de Cartão </h2>
      <DataRow userData={bankCardData}></DataRow>
      <h2 className={styles.dataCategory__card}> Endereço </h2>
      <DataRow userData={addressData}></DataRow>
    </section>
  )
}
