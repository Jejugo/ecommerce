import React, { useState, useContext, useEffect } from 'react'
import { useRouter } from "next/router";
import Form from '../../components/form/Form'
import styles from './Login.module.scss'
import { AuthContext } from '../../context/AuthProvider';

export default function LoginComponent() {
  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState({
    name: 'email',
    value: '',
    placeholder: 'Insira seu email',
    type: 'email'
  })
  const [password, setPassword] = useState({
    name: 'password',
    value: '',
    placeholder: 'Insira sua senha',
    type: 'password'
  })

  async function handleSubmit(e) {
    e.preventDefault()
    login(email.value, password.value)
  }

  function handleInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    switch(name){
      case 'email':
        setEmail((prevState) => ({
          ...prevState,
          value
        }))
        break;
      case 'password':
        setPassword((prevState) => ({
          ...prevState,
          value
        }))
        break;
      default: 
        return null
    }
  }

  return (
    <div className="login">
      <h1 className={styles.login__title}> Insira suas credencias de Login </h1>
      <Form
        formState={[ email, password ]}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      ></Form>
    </div>
  )
}
