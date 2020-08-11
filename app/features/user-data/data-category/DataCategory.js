import React, { useState, useEffect, useContext } from 'react'
import styles from './DataCategory.module.scss'
import DataRow from '../data-row/DataRow'
import { ErrorContext } from '../../../context/ErrorProvider'
import Button from '../../../components/button/Button'

export default function DataCategory({ user }) {
  const { setToggleError, setErrorMessage } = useContext(ErrorContext)

  const [userData, setUserData] = useState([
    { name: 'E-mail', value: user.email },
  ])

  const [personalData, setPersonalData] = useState([
    { name: 'Nome', value: user.name },
    { name: 'CPF', value: user.securityNumber },
    { name: 'E-mail', value: user.email },
  ])

  const [bankCardData, setBankCardData] = useState(
    user.bankCards.map((card) => ({
      name: card.flag,
      value: {
        number: card.number,
        expiration: card.expiration,
        cvv: card.cvv,
      },
    }))
  )

  const [addressData, setAddressData] = useState([
    { name: 'Rua', value: user.address.street },
    { name: 'Bairro', value: user.address.neighborhood },
    { name: 'Número', value: user.address.number },
    { name: 'CEP', value: user.address.zipcode },
    { name: 'Complemento', value: user.address.complement },
  ])

  useEffect(() => {
    if (bankCardData.length === 0) {
      setErrorMessage('Não há cartões. Adicione um para realizar suas compras!')
      setToggleError(true)
      setBankCardData([
        { status: 'empty', name: 'Não há cartões adicionados.' },
      ])
    }
  }, [bankCardData])

  function handleSubmit(e) {
    e.preventDefault()
    console.log(userData, personalData, bankCardData, addressData)
  }

  return (
    <section className={styles.dataCategory}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.dataCategory__card}> Dados de Usuário </h2>
        <DataRow userData={userData} changeData={setUserData}></DataRow>
        <h2 className={styles.dataCategory__card}> Dados Pessoais</h2>
        <DataRow userData={personalData} changeData={setPersonalData}></DataRow>
        <h2 className={styles.dataCategory__card}> Dados de Cartão </h2>
        <DataRow userData={bankCardData} changeData={setBankCardData}></DataRow>
        <h2 className={styles.dataCategory__card}> Endereço </h2>
        <DataRow userData={addressData} changeData={setAddressData}></DataRow>
        <div className={styles.dataCategory__buttonWrapper}>
          <Button text={'Salvar'}></Button>
        </div>
      </form>
    </section>
  )
}
