import React, { useContext } from 'react'
import Layout from '../app/components/layout/Layout'
import LoginComponent from '../app/features/login/Login'
import HeadComponent from '../app/components/head/HeadComponent'
import AuthProvider from '../app/context/AuthProvider'
import { ErrorContext } from '../app/context/ErrorProvider'
import Error from '../app/components/error/Error'

export default function login() {
  return (
    <section>
      <Error></Error>
      <HeadComponent />
      <Layout>
        <LoginComponent></LoginComponent>
      </Layout>
    </section>
  )
}
