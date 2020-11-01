import React, { useState, useEffect, useContext } from 'react'
import styles from './Showcase.module.scss'

import { retrieveProduct } from '../../services/products'
import { ProductsContext } from '../../context/ProductsProvider'

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from 'react-image-magnifiers'
import PaymentCheckoutForm from '../purchase/payment/PaymentCheckoutForm'

export default function ShowcaseComponent() {
  const [productId, setProductId] = useState(null)
  const [product, setProduct] = useState(null)

  const { showcaseProduct } = useContext(ProductsContext)

  useEffect(() => {
    const retrieveProductCall = async () => {
      setProductId(showcaseProduct.id)
      const { product } = await retrieveProduct(showcaseProduct.id)
      setProduct(product)
    }

    if (showcaseProduct) {
      retrieveProductCall()
    }
  }, [showcaseProduct])

  const [status, setStatus] = useState('ready')

  if (status === 'success') {
    return <div>Congrats on your empanadas!</div>
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
        {product && (
          <Magnifier
            className={`${styles.productShowcase__bigImage_item}`}
            imageSrc={product.images[0]}
            imageAlt="Product-Image"
            largeImageSrc={product.images[0]} // Optional
            mouseActivation={MOUSE_ACTIVATION.CLICK} // Optional
            touchActivation={TOUCH_ACTIVATION.TAP} // Optional
            dragToMove={true}
          />
        )}
      </div>

      <PaymentCheckoutForm
        success={() => {
          setStatus('success')
        }}
        product={product}
      />
    </div>
  )
}
