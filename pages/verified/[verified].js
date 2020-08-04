import React from 'react'
import HeadComponent from '../../app/components/head/HeadComponent'
import Layout from '../../app/components/layout/Layout'
import PageContainer from '../../app/components/layout/main-container/PageContainer'
import EmailTokenProvider from '../../app/context/EmailTokenProvider'
import VerifiedAccountText from '../../app/components/verified-account-text/VerifiedAccountText'

const verified = () => {
  return (
    <EmailTokenProvider>
      <section>
        <HeadComponent />
        <Layout>
          <PageContainer>
            <VerifiedAccountText />
          </PageContainer>
        </Layout>
      </section>
    </EmailTokenProvider>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default verified