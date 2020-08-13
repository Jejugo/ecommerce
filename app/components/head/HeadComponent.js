import React from 'react'
import Head from 'next/head'

export default function HeadComponent() {
  return (
    <Head>
      <title>Ecommerce</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      ></link>
    </Head>
  )
}
