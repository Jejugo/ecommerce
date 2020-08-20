import react, { useContext, useEffect } from 'react'
import Layout from '../app/components/layout/Layout'
import HomeComponent from '../app/features/home/Home'
import HeadComponent from '../app/components/head/HeadComponent'
import { retrieveProducts } from '../app/services/products'
import { ProductsContext } from '../app/context/ProductsProvider'

function Home(props) {

  const { products, setProducts} = useContext(ProductsContext)

  useEffect(() => {
    setProducts(props.products)

  }, [])

  return (
    <section className="container">
      <HeadComponent />

      <Layout>
        <HomeComponent></HomeComponent>
      </Layout>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  )
}

export async function getStaticProps() {
  const { products } = await retrieveProducts()
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      products: products.data
    }
  }
}

export default Home
