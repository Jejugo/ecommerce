import React, { Component } from 'react'
import styles from './UserDataConfiguration.module.scss'

class userDataConfiguration extends Component {

  constructor(props){
    super(props)

    this.state = {
      personalData: {
        title: 'Dados pessoais',
        formData: [
          { name: 'completeName', value: '', placeholder: 'Mude seu nome...' },
        ]
      },

      cards: {
        title: 'Cartões',
        formData: [
          { name: 'name', value: '', placeholder: 'Insira seu nome...' },
        ]
      },

      addresses: {
        title: 'Endereços',
        formData: [
          { name: 'name', value: '', placeholder: 'Insira seu nome...' },
        ]
      }
    }
  }

  render(){
    return (
      <section className={styles.dataConfiguration}>
        
      </section>
    )
  }
}

export default userDataConfiguration;