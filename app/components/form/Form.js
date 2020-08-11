import React, { Component } from 'react'
import Card from '../../../app/components/card/Card'
import styles from './Form.module.scss'

const Form = ({ formState, handleSubmit, handleInput }) => {
    return (
      <form
        className={`${styles.form} ${styles.flex} ${styles.column}`}
        onSubmit={handleSubmit}
      >
        <Card>
          <div className={`${styles.form__inputCard} ${styles.flex} ${styles.column}`}>
            {
              formState && formState.map(({ name, placeholder, value, type }, index) => (
                <div key={index}>
                  <label htmlFor={name} />
                  <input
                    className={styles.form__input}
                    onChange={handleInput}
                    id={name}
                    type={type || "text"}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onFocus={(e) => e.target.name}
                  />
                </div>
              ))
            }
          </div>
        </Card>
        <button className={styles.form__submit}> Enviar </button>
      </form>
    )
}
 export default Form