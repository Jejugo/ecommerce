import Head from 'next/head'
import Layout from '../app/components/layout/Layout'
import CarouselComponent from '../app/components/carousel/Carousel'
import LastVisit from '../app/components/last-visit/LastVisit'
import PageContainer from '../app/components/layout/page-container/PageContainer'
import Offers from '../app/components/offers/Offers'

export default function Home() {
  return (
    <section className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      </Head>

      <Layout>
        <CarouselComponent />
  
        <PageContainer>
          <LastVisit />
          <Offers />
        </PageContainer>
        
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
