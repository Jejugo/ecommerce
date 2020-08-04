import react, { useContext } from 'react'
import Layout from '../app/components/layout/Layout'
import HomeComponent from '../app/features/home/Home'
import HeadComponent from '../app/components/head/HeadComponent'

function Home() {
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

export default Home
