import React from "react";
import App from "next/app";
import AuthProvider from "../app/context/AuthProvider"
import "react-responsive-carousel/lib/styles/carousel.min.css";

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AuthProvider>
        <Component {...pageProps} />

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: white;
            color: white;
          }

          html{
            height: 100%;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </AuthProvider>
    );
  }
}

export default MyApp;
