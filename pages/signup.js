import React, { useLayoutEffect, useContext } from 'react'
import Head from 'next/head'
import Layout from '../app/components/layout/Layout'
import { SubnavContext } from '../app/context/SubnavProvider'
import SignupComponent from '../app/features/signup/Signup'

export default function signup() {

  const { setSubnavToggle } = useContext(SubnavContext)

  setSubnavToggle(false)

  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <SignupComponent></SignupComponent>
      </Layout>
    </section>
  )
}
