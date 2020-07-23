import React, { Component } from 'react'
import styles from './Signup.module.scss'
import Form from '../../components/form/Form'

class SignupComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputList: [
        { name: 'name', value: '', placeholder: 'Insira seu nome...' },
        { name: 'last_name', value: '', placeholder: 'Insira seu sobrenome...' },
        { name: 'security_number', value: '', placeholder: 'Insira seu cpf...' },
        { name: 'email', value: '', placeholder: 'Insira seu email...' },
        { name: 'password', value: '', placeholder: 'Insira sua senha...' },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { inputList } = this.state
    console.log('enviando...', inputList)
  }

  handleInput(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    this.setState((previousState) => ({
      inputList: previousState.inputList.map((stateItem) =>
      stateItem.name === name
        ? { ...stateItem, value }
        : stateItem
      )
    }))
  }

  render() {
    const { inputList } = this.state

    return (
      <>
        <div className={styles.signup}>
          <h1 className={styles.signup__title}> Complete seus dados </h1>
          <Form
            formState={inputList}
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          ></Form>
        </div>
      </>
    )
  }
}

export default SignupComponent