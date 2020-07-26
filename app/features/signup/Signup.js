import React, { Component } from 'react'
import styles from './Signup.module.scss'
import Form from '../../components/form/Form'
import Card from '../../components/card/Card'

class SignupComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputList: [
        { name: 'name', value: '', placeholder: 'Insira seu nome...' },
        {
          name: 'last_name',
          value: '',
          placeholder: 'Insira seu sobrenome...',
        },
        {
          name: 'security_number',
          value: '',
          placeholder: 'Insira seu cpf...',
        },
        { name: 'email', value: '', placeholder: 'Insira seu email...' },
        { name: 'password', value: '', placeholder: 'Insira sua senha...' },
      ],
      verifyEmail: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { inputList } = this.state
    const [name, lastName, securityNumber, email, password] = inputList

    const registerPayload = {
      name: `${name.value} ${lastName.value}`,
      securityNumber: securityNumber.value,
      email: email.value,
      password: password.value,
    }

    const { status } = await fetch('http://localhost:3002/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerPayload),
    })

    console.log(status)

    if (status === 200) {
      this.setState((previousState) => ({
        ...previousState,
        verifyEmail: true,
      }))
    }
  }

  handleInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    this.setState((previousState) => ({
      inputList: previousState.inputList.map((stateItem) =>
        stateItem.name === name ? { ...stateItem, value } : stateItem
      ),
    }))
  }

  render() {
    const { inputList, verifyEmail } = this.state

    return (
      <>
        {!verifyEmail ? (
          <div className={styles.signup}>
            <h1 className={styles.signup__title}> Complete seus dados </h1>
            <Form
              formState={inputList}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
            ></Form>
          </div>
        ) : (
          <Card>
            <div className={`${styles.signup} ${styles.flex} ${styles.column} ${styles.center}`}>
              <h1 className={styles.signup__title}>
                {' '}
                Cadastro realizado com sucesso!{' '}
              </h1>
              <p className={styles.signup__text}>
                {' '}
                Verifique seu e-mail para confirmação.
              </p>
              <svg
                className={styles.checkmark}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className={styles.checkmark__circle}
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className={styles.checkmark__check}
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>
          </Card>
        )}
      </>
    )
  }
}

export default SignupComponent
