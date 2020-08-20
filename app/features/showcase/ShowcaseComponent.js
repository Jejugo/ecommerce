import React, { useState, useEffect, useContext } from 'react'
import styles from './Showcase.module.scss'
import ProductSideOptions from './product-side-options/ProductSideOptions'
import StripeCheckout from 'react-stripe-checkout'
import { products } from '../../const/productsMock.json'
import { AuthContext } from '../../context/AuthProvider'
import { retrieveProduct } from '../../services/products'
import { ProductsContext } from '../../context/ProductsProvider'


const mockProducts = products

export default function ShowcaseComponent() {
  const [quantity, setQuantity] = useState(1)
  const [productId, setProductId] = useState(null)
  const [product, setProduct] = useState(null)

  const { user } = useContext(AuthContext)
  const { showcaseProduct } = useContext(ProductsContext)

  useEffect(() => {
    const retrieveProductCall = async() => {
        setProductId(showcaseProduct.id)
        const { product } = await retrieveProduct(showcaseProduct.id)
        setProduct(product)
    }

    if(showcaseProduct){
      retrieveProductCall()
    }

  }, [ showcaseProduct ])

  const handleToken = async (token) => {
    const response = await fetch(`http://localhost:3002/checkout`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        product, 
        quantity,
        address: user.address
      }),
    })

    console.log(response)
  }

  return (
    <div className={`${styles.productShowcase} ${styles.flex}`}>
      <div className={`${styles.productShowcase__pictures} ${styles.flex}`}>
        <img
          className={`${styles.productShowcase__pictures_item}`}
          src="https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-front-sabaton-T15003.png"
        ></img>
        <img
          className={`${styles.productShowcase__pictures_item}`}
          src="https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-front-sabaton-T15003.png"
        ></img>
        <img
          className={`${styles.productShowcase__pictures_item}`}
          src="https://store.sabaton.net/wp-content/uploads/2015/11/wings-of-glory-tshirt-front-sabaton-T15003.png"
        ></img>
      </div>
      <div className={`${styles.productShowcase__bigImage} ${styles.flex}`}>
        <img
          className={styles.productShowcase__bigImage_item}
          src={product && product.images[0]}
        ></img>
      </div>
      <form>
        <div
          className={`${styles.productShowcase__options} ${styles.flex} ${styles.column} ${styles.itemCenter}`}
        >
          <ProductSideOptions
            className={styles.productShowcase__options}
            quantity={quantity}
            setQuantity={setQuantity}
            product={product}
          />
          <StripeCheckout
            stripeKey="pk_test_51HEoDCLSuvyhvVGuVGvd1GXsbZcU9Emxxf6nhQfPEi6UAs4cCxTf13nLyt7opCsNY5tVKncLHtamN4NMbmkXaxRq00qzHCJ27T"
            token={handleToken}
          ></StripeCheckout>
        </div>
      </form>
    </div>
  )
}
