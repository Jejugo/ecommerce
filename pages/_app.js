import React, { useContext } from 'react'
import App from 'next/app'
import AuthProvider from '../app/context/AuthProvider'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { SubnavProvider } from '../app/context/SubnavProvider'
import { ErrorProvider } from '../app/context/ErrorProvider'
import Error from '../app/components/error/Error'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ErrorProvider>
        <AuthProvider>
          <SubnavProvider>
            <Component {...pageProps} />

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
                background-color: #f7f7f7;
                color: white;
              }

              html {
                height: 100%;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
          </SubnavProvider>
        </AuthProvider>
      </ErrorProvider>
    )
  }
}

export default MyApp
