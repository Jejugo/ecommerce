import React, { useLayoutEffect, useContext } from 'react'
import Layout from '../app/components/layout/Layout'
import { SubnavContext } from '../app/context/SubnavProvider'
import SignupComponent from '../app/features/signup/Signup'
import HeadComponent from '../app/components/head/HeadComponent'

export default function signup() {

  const { setSubnavToggle } = useContext(SubnavContext)

  setSubnavToggle(false)

  return (
    <section>
      <HeadComponent />
      <Layout>
        <SignupComponent></SignupComponent>
      </Layout>
    </section>
  )
}
