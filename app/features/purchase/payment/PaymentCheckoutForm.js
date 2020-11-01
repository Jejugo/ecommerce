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

    const billingDetails = {
      name: user.name,
      email: user.email,
      address: {
        city: 'Vinhedo',
        line1: `${user.address.number} ${user.address.street}`,
        state: user.address.state,
        postal_code: user.address.zipcode
      }
    }

    const cardElement = elements.getElement("card");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails
    })


    if(error){
      console.log(error)
      setCheckoutError(error);
      setProcessingTo(false);
      return;
    }

    else {
      try {
        const data = await fetch('http://localhost:3002/checkout', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: quantity,
          })
        })

        const { paymentIntent: { client_secret: clientSecret } }= await data.json()

        const confirmedCardPayment = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id
        })

        console.log('teste: ', confirmedCardPayment)

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
