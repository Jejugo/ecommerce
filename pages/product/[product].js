import React, { useEffect, useContext } from 'react'
import HeadComponent from '../../app/components/head/HeadComponent'
import Layout from '../../app/components/layout/Layout'
import ShowcaseComponent from '../../app/features/showcase/ShowcaseComponent'
import PageContainer from '../../app/components/layout/main-container/PageContainer'
import { retrieveProduct } from '../../app/services/products'
import { ProductsContext } from '../../app/context/ProductsProvider'

function product (props) {

  const { setShowcaseProduct } = useContext(ProductsContext)


  useEffect(() => {
    setShowcaseProduct(props.product)
  }, [])

  return (
    <main>
      <HeadComponent></HeadComponent>
      <Layout>
        <section>
          <PageContainer>
            <ShowcaseComponent></ShowcaseComponent>
          </PageContainer>
        </section>
      </Layout>
    </main>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [{params: { product: 'jeff-prod_HrRiTicf0FSDyC'} } ],
//     fallback: true,
//   }
// }

// export async function getStaticProps(ctx) {
//   const product = await retrieveProduct('prod_Hrl5vAUSRiQa4g')
//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       teste: 'teste'
//     }
//   }
// }

product.getInitialProps = async (ctx) => {
  console.log('pegando...')
  const id = ctx.query.product.split('-')[ctx.query.product.split('-').length - 1]
  const { product } = await retrieveProduct(id)

  return {
    product
  }
}


export default product