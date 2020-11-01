import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import ProductSideOptions from '../../showcase/product-side-options/ProductSideOptions'
import Button from '../../../components/button/Button'
import config from '../../../configs'

import styles from './PaymentCheckoutForm.module.scss'
import PaymentMethodComponent from './Payment'

export default function PaymentCheckoutForm({ success, product }) {
  const [togglePurchase, setTogglePurchase] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();

  const { user } = useContext(AuthContext)

  const stripe = useStripe()
  const elements = useElements()

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  
  const handleSubmit = async (e) => {
    console.log('passou')
    e.preventDefault()
    setProcessingTo(true)

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    const cardElement = elements.getElement("card");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })


    if(error){
      console.log(error)
      setCheckoutError(error);
      setProcessingTo(false);
      return;
    }

    else {
      try {
        console.log(user)
        const purchase = {
          ...paymentMethod,
          address: {
            line1: `${user.address.number} ${user.address.street}`,
            postal_code: user.address.zipcode,
            city: user.address.city,
            state: user.address.state,
            country: 'Brazil'
          },
          customer: {
            email: user.email,
            name: user.name,
          },
          product,
          quantity,
        }

        let data = await fetch('http://localhost:3002/checkout', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(purchase),
        })

        console.log('response: ', data)
        setProcessingTo(false)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={styles.paymentForm}>
      <form onSubmit={handleSubmit}>
        <div
          className={`${styles.paymentForm__options} ${styles.flex} ${styles.column} ${styles.itemCenter}`}
        >
          <ProductSideOptions
            className={styles.paymentForm__options}
            quantity={quantity}
            setQuantity={setQuantity}
            product={product}
          />  
          <button disable={isProcessing || !stripe} type="submit">{isProcessing ? "Processing..." : `Buy`}</button>
          <PaymentMethodComponent handleCardDetailsChange={handleCardDetailsChange}></PaymentMethodComponent>
        </div>
      </form>
    </div>
  )
}
