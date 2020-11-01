import React, { useState, useEffect, useContext } from 'react'
import styles from './Payment.module.scss'
import {
  CardElement
} from '@stripe/react-stripe-js'



const iframeStyles = {
  base: {
    color: "#000",
    fontSize: "16px",
    iconColor: "#fff",
    "::placeholder": {
      color: "#87bbfd"
    }
  },
  invalid: {
    iconColor: "#ff8080",
    color: "#ff8080"
  },
  complete: {
    iconColor: "#cbf4c9"
  }
};

const cardElementOpts = {
  iconStyle: "solid",
  style: iframeStyles,
  hidePostalCode: true
};


export default function PaymentMethodComponent({ handleCardDetailsChange }){
  return (
    <div className={styles.FormGroup}>
      <div className={styles.FormRow}>
        <CardElement options={cardElementOpts} onChange={handleCardDetailsChange}></CardElement>
      </div>
    </div>
  )
}