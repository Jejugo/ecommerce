import React, { Component } from 'react'
import styles from './UserDataComponent.module.scss'
import DataCategory from './data-category/DataCategory'

export default class UserDataComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accountData: {
        title: 'Dados da conta',
        data: [
          { name: 'Usuário', value: '' }
        ],
      },
      personalData: {
        title: 'Dados pessoais',
        data: [
          { name: 'Nome Completo', value: '' },
          { name: 'Documento', value: '' },
        ],
      },
      cards: {
        title: 'Cartões',
        data: [{ flag: 'Usuário', end: '', expiration: '' }],
      },
      addresses: {
        title: 'Endereços',
        data: [
          { name: 'Usuário', value: '' },
          { name: 'E-mail', value: '' },
        ],
      },
    }
  }

  render() {
    return (
      <section className={styles.userData}>
        <h1 className={styles.userData__title}>Meus dados</h1>
        {
          Object.keys(this.state).map(key => (
            <DataCategory card={this.state[key]}></DataCategory>
          ))
        }
      </section>
    )
  }
}
