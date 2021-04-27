import React, { useState, useEffect, useContext } from 'react'
import styles from './DataCategory.module.scss'
import DataRow from '../data-row/DataRow'
import { ErrorContext } from '../../../context/ErrorProvider'
import { warningContext } from '../UserDataComponent' 
import Button from '../../../components/button/Button'
import builder from '../../../builder'

export default function DataCategory({ user }) {
  const { setToggleError, setErrorMessage } = useContext(ErrorContext)
  const { setToggleWarning, setWarningMessage } = useContext(warningContext)

  const [userData, setUserData] = useState([
    { name: 'email', title: 'E-mail', value: user.email },
  ])

  const [personalData, setPersonalData] = useState([
    { name: 'name', title: 'Nome', value: user.name },
    { name: 'securityNumber', title: 'CPF', value: user.securityNumber, disabled: true },
    { name: 'email', title: 'E-mail', value: user.email},
  ])

  const [addressData, setAddressData] = useState([
    { name: 'street', title: 'Rua', value: user.address.street },
    { name: 'neighborhood', title: 'Bairro', value: user.address.neighborhood },
    { name: 'number', title: 'Número', value: user.address.number },
    { name: 'zipcode', title: 'CEP', value: user.address.zipcode },
    { name: 'complement', title: 'Complemento', value: user.address.complement },
    //{ name: 'city', title: 'Cidade', value: user.address.city }, add to sequelize
  ])

  async function handleSubmit(e) {
    e.preventDefault()
    const newCustomer = builder.customer.newCustomerFromUserDataForm(personalData, addressData)
    try {
      await fetch(`http://localhost:3002/customer/${user.id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCustomer),
      })
      setToggleWarning(true)
      setWarningMessage({ message: 'Dados salvos com sucesso!', success: true })
    }
    catch(err){
      console.error(err)
      setErrorMessage('Houve um erro no envio dos dados.')
      setToggleError(true)
    }
  }

  return (
    <section className={styles.dataCategory}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.dataCategory__card}> Dados de Usuário </h2>
        <DataRow userData={userData} changeData={setUserData}></DataRow>
        <h2 className={styles.dataCategory__card}> Dados Pessoais</h2>
        <DataRow userData={personalData} changeData={setPersonalData}></DataRow>
        <h2 className={styles.dataCategory__card}> Endereço </h2>
        <DataRow userData={addressData} changeData={setAddressData}></DataRow>
        <div className={styles.dataCategory__buttonWrapper}>
          <Button text={'Salvar'}></Button>
        </div>
      </form>
    </section>
  )
}
